import { test } from '@playwright/test';

// Review screenshots, not assertions. Run with `pnpm screenshots`. Files go to artifacts/screenshots/.
test.skip(!process.env['CAPTURE'], 'Set CAPTURE=1 to write review screenshots.');

const shots = [
	{ name: 'home', path: '/docs/' },
	{ name: 'installation', path: '/docs/pack/installation/' },
	{ name: 'blocks', path: '/docs/blocks/' },
	{ name: 'authoring', path: '/docs/contribute/authoring/' },
	{ name: '404', path: '/docs/no-such-page/' },
];

for (const shot of shots) {
	test(`capture ${shot.name}`, async ({ page }, info) => {
		await page.goto(shot.path);
		await page.evaluate(() => document.fonts.ready);
		await page.screenshot({ path: `artifacts/screenshots/${info.project.name}-${shot.name}.png`, fullPage: true });
	});
}

test('capture search', async ({ page }, info) => {
	await page.goto('/docs/');
	await page.getByRole('button', { name: 'Search' }).click();
	await page.getByRole('dialog', { name: 'Search' }).getByRole('textbox', { name: 'Search' }).fill('Java 8');
	await page.locator('#starlight__search a[href^="/docs/"]').first().waitFor();
	await page.screenshot({ path: `artifacts/screenshots/${info.project.name}-search.png` });
});

test('capture mobile menu', async ({ page, isMobile }, info) => {
	test.skip(!isMobile, 'Mobile only.');
	await page.goto('/docs/pack/overview/');
	await page.getByRole('button', { name: 'Menu' }).click();
	await page.screenshot({ path: `artifacts/screenshots/${info.project.name}-menu.png` });
});
