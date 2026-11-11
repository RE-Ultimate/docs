import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { expect, test, type Locator, type Page } from '@playwright/test';
import { blockDetailsSchema, type Recipe } from '../src/lib/block-details-schema';
import { machineGuiSchema } from '../src/lib/machine-gui-schema';

// Recipe and machine sections on block pages. Run `pnpm build` first, then `pnpm test:e2e`.
// These tests read the real dataset (src/data/block-details) to pick pages, so they follow data changes.
// Edge cases that need invented data (alternatives, fluids) are covered by src/lib/*.test.ts.

const detailsRoot = join(process.cwd(), 'src/data/block-details');
const allDetails = () =>
	readdirSync(detailsRoot).flatMap((mod) =>
		readdirSync(join(detailsRoot, mod)).map((file) => blockDetailsSchema.parse(JSON.parse(readFileSync(join(detailsRoot, mod, file), 'utf8')))),
	);

/** First recipe (with its page) that satisfies a predicate, or undefined when the dataset has none. */
const findRecipe = (predicate: (recipe: Recipe) => boolean) => {
	for (const details of allDetails()) {
		const recipe = details.recipes.find(predicate);
		if (recipe) return { page: `/docs/blocks/${details.block}/`, recipe };
	}
	return undefined;
};

/** Opens the panel of one recipe and returns it with its section. */
const openRecipe = async (page: Page, url: string, id: string) => {
	await page.goto(url);
	const panel = page.locator(`#panel-${id}`);
	const tab = page.locator(`#tab-${id}`);
	if (await tab.count()) await tab.click();
	await expect(panel).toBeVisible();
	return { panel, section: page.locator('[data-recipes]').filter({ has: panel }) };
};

const setBatches = async (section: Locator, value: string) => {
	const input = section.getByRole('spinbutton');
	await input.fill(value);
	await input.blur();
	return input;
};

test('macerator shows crafting and processing sections, in the table of contents too', async ({ page, isMobile }) => {
	await page.goto('/docs/blocks/ic2/macerator/');
	const crafting = page.locator('#crafting');
	await expect(crafting).toBeVisible();
	await expect(page.locator('#processing')).toBeVisible();
	// The crafting grid has nine cells and the processing examples are not mixed into it.
	const section = page.locator('[data-recipes]').first();
	await expect(section.locator('.ru-grid .ru-cell')).toHaveCount(9);
	await expect(section.locator('.ru-outs .ru-slot')).toHaveCount(1);
	await expect(page.locator('#processing').locator('xpath=ancestor::section').locator('.ru-grid')).toHaveCount(0);
	// The mobile table of contents sits in a closed dropdown, so check it on desktop only.
	test.skip(isMobile, 'Desktop table of contents.');
	const toc = page.getByRole('navigation', { name: 'On this page' }).first();
	for (const slug of ['crafting', 'processing', 'image-credits']) {
		await expect(toc.locator(`a[href="#${slug}"]`).first()).toBeAttached();
	}
	// Starlight's Overview entry stays first.
	await expect(toc.getByRole('link').first()).toHaveAttribute('href', '#_top');
});

test('batches multiply consumed amounts, keep reusable tools fixed, and stay inside the bounds', async ({ page }) => {
	const target = findRecipe((recipe) => recipe.ingredients.some((slot) => slot?.consumed === false)) ?? findRecipe(() => true);
	expect(target, 'dataset has at least one recipe').toBeDefined();
	const { panel, section } = await openRecipe(page, target!.page, target!.recipe.id);
	const amounts = panel.locator('[data-amount]:visible');
	const read = async () => amounts.evaluateAll((nodes) => nodes.map((node) => node.textContent ?? ''));
	const before = await read();
	const kinds = await amounts.evaluateAll((nodes) => nodes.map((node) => (node as HTMLElement).dataset['scale']));
	const bases = await amounts.evaluateAll((nodes) => nodes.map((node) => Number((node as HTMLElement).dataset['base'])));

	const input = await setBatches(section, '5');
	const after = await read();
	after.forEach((text, index) => {
		const expected = kinds[index] === 'fixed' ? before[index] : new Intl.NumberFormat('en', { maximumFractionDigits: 2 }).format((bases[index] ?? 0) * 5);
		expect(text.replace(/\s*mB$/, ''), `amount ${index}`).toBe((expected ?? '').replace(/\s*mB$/, ''));
	});

	// Stepper buttons and bounds.
	await section.getByRole('button', { name: /^More / }).click();
	await expect(input).toHaveValue('6');
	await setBatches(section, '5000');
	await expect(input).toHaveValue('999');
	await setBatches(section, '0');
	await expect(input).toHaveValue('1');
	await expect(section.getByRole('button', { name: /^Fewer / })).toBeDisabled();
	expect(await read()).toEqual(before);
});

test('chance outputs keep their percentage and read "up to" once batches grow', async ({ page }) => {
	const target = findRecipe((recipe) => recipe.outputs.some((output) => output.chance !== undefined && output.chance < 1));
	test.skip(!target, 'dataset has no chance output');
	const { panel, section } = await openRecipe(page, target!.page, target!.recipe.id);
	const chanceRow = panel.locator('.ru-yield tbody tr').filter({ hasText: 'chance each' }).first();
	await expect(chanceRow).toContainText(/\d+(\.\d+)?% chance each/);
	await setBatches(section, '3');
	await expect(chanceRow.locator('td.ru-num')).toContainText(/^up to\s+\d/);
	await expect(chanceRow).toContainText(/\d+(\.\d+)?% chance each/);
});

test('recipe tabs switch panels with mouse and keyboard, and hashes open a recipe', async ({ page }) => {
	await page.goto('/docs/blocks/ic2/macerator/');
	const tabs = page.locator('#processing').locator('xpath=ancestor::section').getByRole('tab');
	expect(await tabs.count()).toBeGreaterThan(1);
	const panels = page.locator('#processing').locator('xpath=ancestor::section').locator('.ru-panel');
	await expect(tabs.first()).toHaveAttribute('aria-selected', 'true');
	await expect(panels.nth(0)).toBeVisible();
	await expect(panels.nth(1)).toBeHidden();
	await tabs.first().focus();
	await page.keyboard.press('ArrowRight');
	await expect(tabs.nth(1)).toBeFocused();
	await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
	await expect(panels.nth(1)).toBeVisible();
	await expect(panels.nth(0)).toBeHidden();
	const id = await panels.nth(1).getAttribute('data-recipe-id');
	await page.goto(`/docs/blocks/ic2/macerator/#recipe-${id}`);
	await expect(page.locator(`#panel-${id}`)).toBeVisible();
	await expect(page.locator('#processing').locator('xpath=ancestor::section').locator('.ru-panel').first()).toBeHidden();
});

test('slot tooltips show on hover and focus, and Escape dismisses them', async ({ page, isMobile }) => {
	test.skip(isMobile, 'Hover and Escape are desktop interactions.');
	await page.goto('/docs/blocks/ic2/macerator/');
	const face = page.locator('.ru-grid .ru-face').first();
	const tip = face.locator('xpath=following-sibling::*[contains(@class,"ru-tip")]');
	await expect(tip).toBeHidden();
	await face.hover();
	await expect(tip).toBeVisible();
	await page.keyboard.press('Escape');
	await expect(tip).toBeHidden();
	await page.mouse.move(0, 0);
	await face.focus();
	await expect(tip).toBeVisible();
	// The accessible name carries the same facts as the tooltip.
	await expect(face).toHaveAttribute('aria-label', /Amount: /);
});

test('without JavaScript every recipe shows, with materials, results and sources', async ({ browser }) => {
	const context = await browser.newContext({ javaScriptEnabled: false });
	const page = await context.newPage();
	await page.goto('/docs/blocks/ic2/macerator/');
	await expect(page.locator('[data-toolbar]:visible')).toHaveCount(0);
	const panels = page.locator('.ru-panel');
	expect(await panels.count()).toBeGreaterThan(2);
	for (let index = 0; index < (await panels.count()); index += 1) await expect(panels.nth(index)).toBeVisible();
	await expect(page.locator('.ru-mats').first()).toBeVisible();
	await expect(page.locator('.ru-yield').first()).toBeVisible();
	await expect(page.locator('.ru-meta').first()).toContainText('Sources:');
	await context.close();
});

test('image credits list real media metadata and never claim the site license', async ({ page }) => {
	await page.goto('/docs/blocks/ic2/macerator/');
	const figure = page.locator('.ru-figure');
	await expect(figure.locator('img')).toHaveAttribute('src', /^\/docs\/media\/wiki\//);
	await expect(figure.getByRole('link', { name: 'Credit and license' })).toHaveAttribute('href', '#image-credits');
	const credits = page.locator('.ru-credits');
	await expect(credits.getByRole('heading', { name: 'Image credits' })).toBeVisible();
	await expect(credits).toContainText("not covered by this site's MIT license");
	const rows = credits.locator('tbody tr');
	expect(await rows.count()).toBeGreaterThan(0);
	for (const link of await rows.first().getByRole('link').all()) await expect(link).toHaveAttribute('href', /^https?:\/\//);
});

test('machine pages show the dataset facts, and automation faces when supplied', async ({ page }) => {
	const machine = allDetails().find((details) => (details.machine?.inputs?.length ?? 0) > 0);
	test.skip(!machine, 'dataset has no machine inputs');
	await page.goto(`/docs/blocks/${machine!.block}/`);
	const summary = page.locator('.ru-machine');
	await expect(summary.getByRole('heading', { name: 'Machine summary' })).toBeVisible();
	await expect(summary.getByRole('heading', { name: 'Accepts' })).toBeVisible();
	await expect(summary).toContainText(machine!.machine!.inputs![0]!);
	const face = machine!.machine!.automation?.[0];
	if (face) await expect(summary.locator('.ru-faces')).toContainText(face.face);
	else await expect(summary.locator('.ru-faces')).toHaveCount(0);
});

test('block pages fit the viewport and every image loads', async ({ page }) => {
	for (const details of allDetails()) {
		await page.goto(`/docs/blocks/${details.block}/`);
		const brokenImages = await page.evaluate(async () => {
			const failures: string[] = [];
			await Promise.all([...document.images].map(async (image) => {
				image.loading = 'eager';
				try {
					await image.decode();
				} catch {
					failures.push(image.getAttribute('src') ?? 'Image without a source');
				}
			}));
			return failures;
		});
		expect(brokenImages, details.block).toEqual([]);
		const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
		expect(overflow, details.block).toBeLessThanOrEqual(0);
	}
});

const guiRoot = join(process.cwd(), 'src/data/machine-guis');
const allGuis = () =>
	readdirSync(guiRoot).flatMap((mod) =>
		readdirSync(join(guiRoot, mod)).map((file) => machineGuiSchema.parse(JSON.parse(readFileSync(join(guiRoot, mod, file), 'utf8')))),
	);

test('machines with a GUI layout show their window, and processing runs inside it', async ({ page }) => {
	for (const gui of allGuis()) {
		await page.goto(`/docs/blocks/${gui.block}/`);
		const summary = page.locator('.ru-machine');
		await expect(summary.locator('.ru-mwin .ru-mslot'), gui.block).toHaveCount(gui.slots.length);
		// Neighbouring slots with the same label share a legend line, so there is one line per run of labels.
		const runs = gui.slots.filter((slot, i) => i === 0 || slot.label !== gui.slots[i - 1]?.label).length;
		await expect(summary.locator('.ru-mwin-legend li'), gui.block).toHaveCount(runs);
	}
	const { panel } = await openRecipe(page, '/docs/blocks/ic2/macerator/', 'iron-ore');
	await expect(panel.locator('.ru-mwin')).toBeVisible();
	await expect(panel.locator('.ru-mwin .ru-slot')).toHaveCount(2);
});

test('every recipe item shows a picture instead of its name', async ({ page }) => {
	const textOnly: string[] = [];
	for (const details of allDetails()) {
		if (details.recipes.length === 0) continue;
		await page.goto(`/docs/blocks/${details.block}/`);
		const names = await page.locator('.ru-recipes .ru-name').allTextContents();
		textOnly.push(...names.map((name) => `${details.block}: ${name}`));
	}
	expect(textOnly).toEqual([]);
});
