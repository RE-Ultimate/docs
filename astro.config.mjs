// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

const repository = 'https://github.com/RE-Ultimate/docs';

// GitHub Pages serves this project site at https://re-ultimate.github.io/docs/.
// Every internal link must go through the /docs/ base. Use `withBase()` from src/lib/paths.ts in components.
export default defineConfig({
	site: 'https://re-ultimate.github.io',
	base: '/docs/',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Re:Ultimate',
			// Fails the build on broken internal links and anchors in Markdown content.
			plugins: [starlightLinksValidator()],
			description: 'Documentation for Re:Ultimate, a maintained Minecraft 1.4.7 modpack.',
			favicon: '/favicon.png',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RE-Ultimate' }],
			editLink: { baseUrl: `${repository}/edit/main/` },
			customCss: ['./src/styles/fonts.css', './src/styles/theme.css'],
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				PageTitle: './src/components/PageTitle.astro',
				Footer: './src/components/Footer.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#000000' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://re-ultimate.github.io/docs/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '640' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '360' } },
			],
			expressiveCode: {
				themes: ['github-dark-default'],
				useStarlightDarkModeSwitch: false,
				useStarlightUiThemeColors: false,
				styleOverrides: {
					borderRadius: '0',
					borderColor: 'var(--ru-rule)',
					borderWidth: '1px',
					codeBackground: 'var(--ru-code-bg)',
					codeFontFamily: 'var(--__sl-font-mono)',
					codeFontSize: '0.875rem',
					codeLineHeight: '1.65',
					uiFontFamily: 'var(--__sl-font)',
					focusBorder: 'var(--ru-accent)',
					scrollbarThumbColor: 'var(--ru-rule-strong)',
					scrollbarThumbHoverColor: 'var(--ru-text-2)',
					frames: {
						editorBackground: 'var(--ru-code-bg)',
						terminalBackground: 'var(--ru-code-bg)',
						editorActiveTabBackground: 'var(--ru-code-bg)',
						editorTabBarBackground: '#000',
						editorTabBarBorderBottomColor: 'var(--ru-rule)',
						editorActiveTabIndicatorTopColor: 'var(--ru-accent)',
						editorActiveTabIndicatorBottomColor: 'transparent',
						terminalTitlebarBackground: '#000',
						terminalTitlebarBorderBottomColor: 'var(--ru-rule)',
						terminalTitlebarForeground: 'var(--ru-text-2)',
						terminalTitlebarDotsForeground: 'var(--ru-rule-strong)',
						terminalTitlebarDotsOpacity: '1',
						frameBoxShadowCssValue: 'none',
						inlineButtonBackground: 'var(--ru-text)',
						inlineButtonForeground: 'var(--ru-text)',
						inlineButtonBorder: 'var(--ru-rule-strong)',
						tooltipSuccessBackground: 'var(--ru-text)',
						tooltipSuccessForeground: '#000',
					},
				},
			},
			sidebar: [
				{
					label: 'Pack',
					items: [
						{ label: 'Documentation home', link: '/' },
						{ slug: 'pack/overview' },
						{ slug: 'pack/installation' },
						{ slug: 'pack/playthrough' },
						{ slug: 'pack/reference-scope' },
					],
				},
				{
					label: 'Reference',
					items: [{ slug: 'blocks' }],
				},
				{
					label: 'Contribute',
					items: [{ slug: 'contribute/authoring' }],
				},
			],
		}),
	],
});
