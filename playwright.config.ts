import { defineConfig, devices } from '@playwright/test';

// Browser tests run against the built site (`pnpm build` first), served at the real /docs/ base path.
// Set PW_CHANNEL=chrome to use an installed Google Chrome instead of Playwright's Chromium.
const port = 4322;
const channel = process.env['PW_CHANNEL'];

export default defineConfig({
	testDir: 'tests',
	outputDir: 'test-results',
	fullyParallel: true,
	reporter: 'list',
	use: {
		baseURL: `http://127.0.0.1:${port}`,
		...(channel ? { channel } : {}),
	},
	webServer: {
		command: `node scripts/serve-dist.mjs ${port}`,
		url: `http://127.0.0.1:${port}/docs/`,
		reuseExistingServer: false,
	},
	projects: [
		{ name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 900 } } },
		{ name: 'mobile', use: { ...devices['Pixel 7'] } },
	],
});
