// Run with `pnpm test:unit`.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
	MAX_BATCHES,
	chancePercent,
	clampBatches,
	compactAmount,
	formatAmount,
	groupAmount,
	groupIngredients,
	ingredientAmount,
	productAmount,
	type Option,
} from './recipe-math.ts';

test('batches stay whole and inside the bounds', () => {
	assert.equal(clampBatches(0), 1);
	assert.equal(clampBatches(-4), 1);
	assert.equal(clampBatches(2.9), 2);
	assert.equal(clampBatches(MAX_BATCHES + 1), MAX_BATCHES);
	assert.equal(clampBatches(Number.NaN), 1);
	assert.equal(clampBatches(Number.POSITIVE_INFINITY), 1);
});

test('consumed ingredients multiply, reusable tools do not', () => {
	assert.equal(ingredientAmount({ count: 3 }, 4), 12);
	assert.equal(ingredientAmount({ count: 250, unit: 'mB', consumed: true }, 3), 750);
	assert.equal(ingredientAmount({ count: 1, consumed: false }, 64), 1);
	assert.equal(ingredientAmount({ count: 2, consumed: false }, 999), 2);
});

test('products multiply and fractions do not drift', () => {
	assert.equal(productAmount({ count: 2 }, 5), 10);
	assert.equal(productAmount({ count: 0.1 }, 3), 0.3);
});

test('chance shows as a percent, and a sure drop has none', () => {
	assert.equal(chancePercent(0.2), 20);
	assert.equal(chancePercent(0.125), 12.5);
	assert.equal(chancePercent(1), undefined);
	assert.equal(chancePercent(undefined), undefined);
});

test('amounts format with grouping and units', () => {
	assert.equal(formatAmount(1500, 'mB'), '1,500 mB');
	assert.equal(formatAmount(3), '3');
	assert.equal(compactAmount(64), '64');
	assert.equal(compactAmount(1000), '1k');
	assert.equal(compactAmount(1500), '1.5k');
	assert.equal(compactAmount(1250), '1,250');
	assert.equal(compactAmount(20000), '20k');
});

const flint: Option = { name: 'Flint', count: 1 };
const planks: Option[] = [
	{ name: 'Planks', count: 1 },
	{ name: 'Birch Planks', count: 1 },
];
const hammer: Option = { name: 'Hammer', count: 1, consumed: false };

test('identical slots share one group, alternatives stay distinct', () => {
	const groups = groupIngredients([[flint], [flint], [flint], planks, planks, [hammer]]);
	assert.equal(groups.length, 3);
	assert.deepEqual(
		groups.map((group) => [group.options[0]?.name, group.slots]),
		[
			['Flint', 3],
			['Planks', 2],
			['Hammer', 1],
		],
	);
});

test('group totals scale with batches except for tools', () => {
	const [flints, , tools] = groupIngredients([[flint], [flint], [flint], planks, [hammer], [hammer]]);
	assert.ok(flints && tools);
	assert.equal(groupAmount(flints, flint, 1), 3);
	assert.equal(groupAmount(flints, flint, 10), 30);
	// Two hammer slots need two hammers, however many batches run.
	assert.equal(groupAmount(tools, hammer, 1), 2);
	assert.equal(groupAmount(tools, hammer, 50), 2);
});

test('the same name with a different tool flag is a different group', () => {
	assert.equal(groupIngredients([[{ name: 'File', count: 1 }], [{ name: 'File', count: 1, consumed: false }]]).length, 2);
});
