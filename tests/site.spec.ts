import { expect, test, type Page } from '@playwright/test';

// Checks the built site at the GitHub Pages base path. Run `pnpm build` first, then `pnpm test:e2e`.

const pages = ['/docs/', '/docs/pack/overview/', '/docs/pack/installation/', '/docs/blocks/', '/docs/contribute/authoring/'];

const horizontalOverflow = (page: Page) =>
	page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

for (const path of pages) {
	test(`${path} renders one heading, fits the viewport, and keeps links under /docs/`, async ({ page }) => {
		const response = await page.goto(path);
		expect(response?.status()).toBe(200);
		await expect(page.locator('h1')).toHaveCount(1);
		expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);

		const localUrls = await page
			.locator('a[href^="/"], link[href^="/"], script[src^="/"], img[src^="/"]')
			.evaluateAll((elements) => elements.map((element) => element.getAttribute('href') ?? element.getAttribute('src') ?? ''));
		expect(localUrls.filter((url) => !url.startsWith('/docs/'))).toEqual([]);
	});
}

test('every internal link resolves', async ({ page, request }) => {
	const targets = new Set<string>();
	for (const path of pages) {
		await page.goto(path);
		const hrefs = await page.locator('a[href^="/docs/"]').evaluateAll((links) => links.map((link) => link.getAttribute('href') ?? ''));
		for (const href of hrefs) targets.add(href.split('#')[0] ?? href);
	}
	for (const target of targets) {
		const response = await request.get(target);
		expect(response.status(), target).toBe(200);
	}
});

test('search finds the installation page', async ({ page }) => {
	await page.goto('/docs/');
	await page.getByRole('button', { name: 'Search' }).click();
	const dialog = page.getByRole('dialog', { name: 'Search' });
	await dialog.getByRole('textbox', { name: 'Search' }).fill('Prism Launcher');
	const result = dialog.locator('a[href="/docs/pack/installation/"]').first();
	await expect(result).toBeVisible();
	await result.click();
	await expect(page).toHaveURL(/\/docs\/pack\/installation\/$/);
	await expect(page.locator('h1')).toHaveText('Installation');
});

test('empty block catalog explains how to add a page', async ({ page }) => {
	await page.goto('/docs/blocks/');
	await expect(page.getByText('No block pages yet.')).toBeVisible();
	await expect(page.getByRole('columnheader', { name: 'Block' })).toBeAttached();
	const howTo = page.getByRole('link', { name: 'Add a block page' });
	await howTo.click();
	await expect(page).toHaveURL(/\/docs\/contribute\/authoring\/#add-a-block-page$/);
	await expect(page.locator('#add-a-block-page')).toBeInViewport();
});

test('unknown pages return the 404 page', async ({ page }) => {
	const response = await page.goto('/docs/no-such-page/');
	expect(response?.status()).toBe(404);
	await expect(page.locator('h1')).toHaveText('Page not found');
	await page.getByRole('main').getByRole('link', { name: 'documentation home' }).click();
	await expect(page).toHaveURL(/\/docs\/$/);
});

test('article pages have breadcrumbs, an edit link, and metadata', async ({ page }) => {
	await page.goto('/docs/pack/installation/');
	const crumbs = page.getByRole('navigation', { name: 'Breadcrumb' });
	await expect(crumbs.getByRole('link', { name: 'Docs' })).toHaveAttribute('href', '/docs/');
	await expect(page.getByRole('link', { name: 'Edit this page on GitHub' })).toHaveAttribute(
		'href',
		'https://github.com/RE-Ultimate/docs/edit/main/src/content/docs/pack/installation.md',
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://re-ultimate.github.io/docs/pack/installation/');
	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', 'https://re-ultimate.github.io/docs/og.png');
});

test('keyboard users can skip to the content', async ({ page }) => {
	await page.goto('/docs/pack/overview/');
	await page.keyboard.press('Tab');
	const skip = page.getByRole('link', { name: 'Skip to content' });
	await expect(skip).toBeFocused();
	await expect(skip).toBeInViewport();
	await page.keyboard.press('Enter');
	await expect(page).toHaveURL(/#_top$/);
});

test('mobile menu opens and navigates', async ({ page, isMobile }) => {
	test.skip(!isMobile, 'The menu button only exists on narrow screens.');
	await page.goto('/docs/');
	await page.getByRole('button', { name: 'Menu' }).click();
	const nav = page.getByRole('navigation', { name: 'Main' });
	await nav.getByRole('link', { name: 'Installation' }).click();
	await expect(page).toHaveURL(/\/docs\/pack\/installation\/$/);
	expect(await horizontalOverflow(page)).toBeLessThanOrEqual(0);
});
