/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	userSidebar: [
		'index',
		{
			type: 'category',
			label: 'Concepts',
			link: {
				type: 'generated-index',
				title: 'Mailchain Concepts',
				description: 'Learn more about Mailchain concepts.',
				slug: 'user/category/concepts',
				keywords: ['concepts'],
			},
			items: [{ type: 'autogenerated', dirName: 'user/concepts' }],
		},
		'user/faqs/index',
		{
			type: 'category',
			label: 'Guides & Tutorials',
			link: {
				type: 'generated-index',
				title: 'Guides & Tutorials',
				description: 'This section contains helpful guides and tutorials to help you with Mailchain.',
				slug: 'user/guides',
				keywords: ['guides', 'tutorial'],
			},
			items: [
				{
					type: 'category',
					label: 'Getting Started',
					link: {
						type: 'generated-index',
						title: 'Getting Started With Mailchain',
						description: 'Learn how to create an account, and start sending and receiving messages.',
						slug: 'user/guides/getting-started',
						keywords: ['guides', 'tutorial', 'getting started'],
						// image: '/img/docusaurus.png',
					},
					items: [{ type: 'autogenerated', dirName: 'user/guides/getting-started' }],
				},
				'user/guides/understanding-connecting-wallets',
				'user/guides/understanding-mailchain-authentication',
			],
		},
		'getting-help',
	],
	developerSidebar: [{ type: 'autogenerated', dirName: 'developer' }, 'getting-help'],
};

module.exports = sidebars;
