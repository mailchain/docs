// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Mailchain Docs',
	tagline: 'Your Web3 Inbox',
	url: 'https://docs.mailchain.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	trailingSlash: true,

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'mailchain', // Usually your GitHub org/user name.
	projectName: 'monorepo/apps/', // Usually your repo name.

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	'https://github.com/mailchain/monorepo/tree/main/apps/',
					routeBasePath: '/', // changing from 'docs' removes the docs folder from path
					remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Mailchain Documentation',
				logo: {
					alt: 'Mailchain Logo',
					src: 'img/logo.svg',
				},
				items: [
					{ to: 'welcome-to-mailchain', label: 'Docs For Users', position: 'left' },
					{ to: 'developer/', label: 'Developer Docs', position: 'left' },
					{ to: 'user/guides', label: 'Getting Started Guides & Tutorials', position: 'left' },
					{ to: 'user/faqs', label: 'FAQs', position: 'left' },
					{ to: 'getting-help', label: 'Help & Support', position: 'left' },
					{
						href: 'https://mailchain.com/',
						label: 'Mailchain',
						position: 'right',
					},
					{
						href: 'https://github.com/mailchain',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'light',
				links: [
					{
						title: 'Community',
						items: [
							{
								label: 'Discord',
								href: 'https://discord.gg/ZMnJNx4WkQ',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/mailchain_xyz',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: 'https://www.mailchain.com/news',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/mailchain',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Mailchain`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	plugins: [
		[
			require.resolve('@cmfcmf/docusaurus-search-local'),
			{
				// whether to index docs pages
				indexDocs: true,

				// Whether to also index the titles of the parent categories in the sidebar of a doc page.
				// 0 disables this feature.
				// 1 indexes the direct parent category in the sidebar of a doc page
				// 2 indexes up to two nested parent categories of a doc page
				// 3...
				//
				// Do _not_ use Infinity, the value must be a JSON-serializable integer.
				indexDocSidebarParentCategories: 0,

				// whether to index blog pages
				indexBlog: false,

				// whether to index static pages
				// /404.html is never indexed
				indexPages: true,

				// language of your documentation, see next section
				language: 'en',

				// setting this to "none" will prevent the default CSS to be included. The default CSS
				// comes from autocomplete-theme-classic, which you can read more about here:
				// https://www.algolia.com/doc/ui-libraries/autocomplete/api-reference/autocomplete-theme-classic/
				// When you want to overwrite CSS variables defined by the default theme, make sure to suffix your
				// overwrites with `!important`, because they might otherwise not be applied as expected. See the
				// following comment for more information: https://github.com/cmfcmf/docusaurus-search-local/issues/107#issuecomment-1119831938.
				style: undefined,

				// The maximum number of search results shown to the user. This does _not_ affect performance of
				// searches, but simply does not display additional search results that have been found.
				maxSearchResults: 8,

				// lunr.js-specific settings
				lunr: {
					// When indexing your documents, their content is split into "tokens".
					// Text entered into the search box is also tokenized.
					// This setting configures the separator used to determine where to split the text into tokens.
					// By default, it splits the text at whitespace and dashes.
					//
					// Note: Does not work for "ja" and "th" languages, since these use a different tokenizer.
					tokenizerSeparator: /[\s\-]+/,
					// https://lunrjs.com/guides/customising.html#similarity-tuning
					//
					// This parameter controls the importance given to the length of a document and its fields. This
					// value must be between 0 and 1, and by default it has a value of 0.75. Reducing this value
					// reduces the effect of different length documents on a term’s importance to that document.
					b: 0.75,
					// This controls how quickly the boost given by a common word reaches saturation. Increasing it
					// will slow down the rate of saturation and lower values result in quicker saturation. The
					// default value is 1.2. If the collection of documents being indexed have high occurrences
					// of words that are not covered by a stop word filter, these words can quickly dominate any
					// similarity calculation. In these cases, this value can be reduced to get more balanced results.
					k1: 1.2,
					// By default, we rank pages where the search term appears in the title higher than pages where
					// the search term appears in just the text. This is done by "boosting" title matches with a
					// higher value than content matches. The concrete boosting behavior can be controlled by changing
					// the following settings.
					titleBoost: 5,
					contentBoost: 1,
					tagsBoost: 3,
					parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
				},
			},
		],
	],
};

module.exports = config;
