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
			favicon: '/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RE-Ultimate' }],
			editLink: { baseUrl: `${repository}/edit/main/` },
			customCss: ['./src/styles/fonts.css', './src/styles/theme.css', './src/styles/block-details.css'],
			// Adds the generated block sections (recipes, machine summary, image credits) to the table of contents.
			routeMiddleware: './src/routeData.ts',
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				PageTitle: './src/components/PageTitle.astro',
				MarkdownContent: './src/components/MarkdownContent.astro',
				Footer: './src/components/Footer.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#1b1713' } },
				// PNG fallback for browsers without SVG favicons. Both show the Crest "gold colon" icon.
				{ tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/docs/favicon.png' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://re-ultimate.github.io/docs/og.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
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
						editorTabBarBackground: 'var(--ru-surface)',
						editorTabBarBorderBottomColor: 'var(--ru-rule)',
						editorActiveTabIndicatorTopColor: 'var(--ru-accent)',
						editorActiveTabIndicatorBottomColor: 'transparent',
						terminalTitlebarBackground: 'var(--ru-surface)',
						terminalTitlebarBorderBottomColor: 'var(--ru-rule)',
						terminalTitlebarForeground: 'var(--ru-text-2)',
						terminalTitlebarDotsForeground: 'var(--ru-rule-strong)',
						terminalTitlebarDotsOpacity: '1',
						frameBoxShadowCssValue: 'none',
						inlineButtonBackground: 'var(--ru-text)',
						inlineButtonForeground: 'var(--ru-text)',
						inlineButtonBorder: 'var(--ru-rule-strong)',
						tooltipSuccessBackground: 'var(--ru-text)',
						tooltipSuccessForeground: 'var(--ru-accent-ink)',
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
