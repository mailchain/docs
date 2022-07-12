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
					{ to: 'welcome-to-mailchain', label: 'Home', position: 'left' },
					{ to: 'developer', label: 'Developer Docs', position: 'left' },
					{ to: 'user/guides', label: 'Tutorials and Guides', position: 'left' },
					{ to: 'user/faqs', label: 'FAQs', position: 'left' },
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
				style: 'dark',
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
};

module.exports = config;
