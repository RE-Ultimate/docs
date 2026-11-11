// Run with `pnpm test:unit`. Covers the detail-file schema and the disk loaders on temporary folders.
import assert from 'node:assert/strict';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, test } from 'node:test';
import { blockDetailsSchema, normalizeName, wikiMediaSchema } from './block-details-schema.ts';
import { checkReferences, indexItemMedia, readBlockDetails, readWikiMedia } from './block-details-source.ts';

const source = { title: 'Pinned mod dependencies', url: 'https://example.com/deps.json' };
const stack = (name: string, count = 1) => ({ name, count });
const shaped = (ingredients: unknown[]) => ({
	id: 'crafting',
	type: 'shaped',
	title: 'Crafting',
	ingredients,
	outputs: [stack('Thing')],
	verification: 'pack-code',
	sources: [source],
});
const nine = (...slots: unknown[]) => [...slots, ...Array.from({ length: 9 - slots.length }, () => null)];
const parse = (recipes: unknown[]) => blockDetailsSchema.safeParse({ block: 'ic2/thing', recipes });

test('a valid shaped recipe parses, with notes defaulting to empty', () => {
	const result = parse([shaped(nine(stack('Flint')))]);
	assert.ok(result.success);
	assert.deepEqual(result.data.recipes[0]?.notes, []);
});

test('a shaped recipe needs exactly nine entries and at least one ingredient', () => {
	assert.ok(!parse([shaped([stack('Flint')])]).success);
	assert.ok(!parse([shaped([...nine(stack('Flint')), null])]).success);
	assert.ok(!parse([shaped(nine())]).success);
});

test('list recipes reject empty slots', () => {
	const machine = { ...shaped([]), id: 'dust', type: 'machine', ingredients: [stack('Iron Ore'), null] };
	assert.ok(!parse([machine]).success);
	assert.ok(parse([{ ...machine, ingredients: [stack('Iron Ore')] }]).success);
});

test('counts, chance and unknown fields are checked', () => {
	assert.ok(!parse([shaped(nine(stack('Flint', 0)))]).success);
	assert.ok(!parse([shaped(nine(stack('Flint', -2)))]).success);
	const withOutput = (output: unknown) => parse([{ ...shaped(nine(stack('Flint'))), outputs: [output] }]);
	assert.ok(withOutput({ ...stack('Dust'), chance: 0.2 }).success);
	assert.ok(!withOutput({ ...stack('Dust'), chance: 1.2 }).success);
	assert.ok(!withOutput({ ...stack('Dust'), chanse: 0.2 }).success);
	// Chance belongs to products, alternatives to ingredients.
	assert.ok(!parse([shaped(nine({ ...stack('Flint'), chance: 0.5 }))]).success);
	assert.ok(!withOutput({ ...stack('Dust'), alternatives: [stack('Sand')] }).success);
});

test('alternatives and reusable tools are accepted on ingredients', () => {
	const result = parse([
		shaped(nine({ ...stack('Planks'), alternatives: [stack('Birch Planks')] }, { ...stack('Hammer'), consumed: false })),
	]);
	assert.ok(result.success);
});

test('recipe ids are unique, and sources must be http links', () => {
	assert.ok(!parse([shaped(nine(stack('A'))), shaped(nine(stack('B')))]).success);
	assert.ok(!parse([{ ...shaped(nine(stack('A'))), sources: [] }]).success);
	assert.ok(!parse([{ ...shaped(nine(stack('A'))), sources: [{ title: 'x', url: 'file:///etc/passwd' }] }]).success);
});

test('the block ID must be <mod>/<slug>', () => {
	assert.ok(!blockDetailsSchema.safeParse({ block: 'macerator', recipes: [] }).success);
	assert.ok(blockDetailsSchema.safeParse({ block: 'ic2/macerator' }).success);
});

test('media must use a local /media path without the base, or an https URL', () => {
	const media = (src: string) => ({
		blocks: {},
		items: { Flint: { src, alt: 'Flint', sourceUrl: 'https://example.com/File:Flint.png', credit: 'Someone', license: 'CC BY-SA 3.0' } },
	});
	assert.ok(wikiMediaSchema.safeParse(media('/media/wiki/flint.png')).success);
	assert.ok(wikiMediaSchema.safeParse(media('https://example.com/flint.png')).success);
	assert.ok(!wikiMediaSchema.safeParse(media('/docs/media/wiki/flint.png')).success);
	assert.ok(!wikiMediaSchema.safeParse(media('media/wiki/flint.png')).success);
});

test('item names match across case and punctuation', () => {
	assert.equal(normalizeName('  Refined  Iron Ingot '), 'refined iron ingot');
	assert.equal(normalizeName('RE-Battery'), 're battery');
	assert.equal(normalizeName('Re Battery'), 're battery');
});

// ---------- disk loaders ----------

const temp = mkdtempSync(join(tmpdir(), 'ru-details-'));
after(() => rmSync(temp, { recursive: true, force: true }));
const write = (path: string, content: unknown) => {
	const file = join(temp, path);
	mkdirSync(join(file, '..'), { recursive: true });
	writeFileSync(file, typeof content === 'string' ? content : JSON.stringify(content));
	return file;
};

test('the loader reports a path mismatch, bad JSON and bad shapes together', () => {
	write('ok/ic2/good.json', { block: 'ic2/good', recipes: [] });
	write('ok/ic2/moved.json', { block: 'ic2/other', recipes: [] });
	write('ok/ic2/broken.json', '{ nope');
	write('ok/ic2/short.json', { block: 'ic2/short', recipes: [shaped([stack('Flint')])] });
	write('ok/stray.json', {});
	const { value, problems } = readBlockDetails(join(temp, 'ok'));
	assert.deepEqual([...value.keys()], ['ic2/good']);
	const text = problems.join('\n');
	assert.match(text, /moved\.json: "block" is "ic2\/other" but the file path says "ic2\/moved"/);
	assert.match(text, /broken\.json/);
	assert.match(text, /short\.json: recipes\.0\.ingredients: A shaped recipe needs exactly 9 entries/);
	assert.match(text, /stray\.json: detail files must be in <mod>\/<slug>\.json/);
});

test('a missing folder or media file is empty, not an error', () => {
	assert.deepEqual(readBlockDetails(join(temp, 'none')), { value: new Map(), problems: [] });
	assert.deepEqual(readWikiMedia(join(temp, 'none.json')), { value: { blocks: {}, items: {} }, problems: [] });
});

test('two item names that normalize alike must use the same image', () => {
	const entry = (src: string) => ({ src, alt: 'x', sourceUrl: 'https://example.com/a', credit: 'c', license: 'l' });
	const same = indexItemMedia({ blocks: {}, items: { Flint: entry('/media/a.png'), flint: entry('/media/a.png') } });
	assert.equal(same.problems.length, 0);
	const clash = indexItemMedia({ blocks: {}, items: { Flint: entry('/media/a.png'), flint: entry('/media/b.png') } });
	assert.equal(clash.problems.length, 1);
});

test('reference checks find missing pages, dead links and missing image files', () => {
	const parsed = blockDetailsSchema.parse({
		block: 'ic2/orphan',
		recipes: [
			{
				...shaped(nine({ ...stack('Flint'), href: '/docs/blocks/ic2/missing/', icon: '/media/wiki/gone.png' })),
				outputs: [{ ...stack('Thing'), href: '/docs/blocks/ic2/exists/' }],
			},
		],
	});
	const problems = checkReferences({
		details: new Map([[parsed.block, parsed]]),
		media: { blocks: { 'ic2/nothing': { src: '/media/wiki/x.png', alt: 'x', sourceUrl: 'https://example.com/x', credit: 'c', license: 'l' } }, items: {} },
		blockIds: new Set(['ic2/exists']),
		routes: new Set(['', 'blocks/ic2/exists/']),
		base: '/docs/',
		fileExists: () => false,
	}).join('\n');
	assert.match(problems, /no block page at src\/content\/docs\/blocks\/ic2\/orphan\.md/);
	assert.match(problems, /link "\/docs\/blocks\/ic2\/missing\/" does not match any page/);
	assert.match(problems, /image file public\/media\/wiki\/gone\.png does not exist/);
	assert.match(problems, /wiki-media\.json blocks: "ic2\/nothing" has no block page/);
	assert.doesNotMatch(problems, /ic2\/exists\/" does not match/);
});
