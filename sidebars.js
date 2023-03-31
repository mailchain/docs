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
		{
			type: 'category',
			label: 'Guides & Tutorials',
			collapsed: false,
			link: {
				type: 'generated-index',
				title: 'Guides & Tutorials',
				description: 'This section contains guides and tutorials to help you with Mailchain.',
				slug: 'user/guides',
				keywords: ['guides', 'tutorial'],
			},
			items: [
				{
					type: 'category',
					label: 'Getting Started Guides',
					link: {
						type: 'generated-index',
						title: 'Getting Started With Mailchain',
						description: 'Learn how to create an account, and start sending and receiving messages.',
						slug: 'user/guides/getting-started',
						keywords: ['guides', 'tutorial', 'getting started'],
						// image: '/img/docusaurus.png',
					},
					items: [{ type: 'autogenerated', dirName: 'user/guides/getting-started' }],
					collapsed: false,
				},
				{
					type: 'category',
					label: 'Registering Wallets & Identities',
					collapsed: false,
					link: {
						type: 'generated-index',
						title: 'Registering Wallets & Identities',
						slug: 'user/guides/wallets-and-identities',
						keywords: ['guides', 'name service'],
					},
					items: [
						{
							type: 'category',
							label: 'Aurora (.aurora)',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/aurora/',
								keywords: ['guides', 'name service'],
							},
							items: [
								'user/guides/wallets-and-identities/aurora/aurora-getting-started',
								'user/guides/wallets-and-identities/aurora/aurora-faqs',
							],
						},
						{
							type: 'category',
							label: 'Coinbase ID (cb.id)',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/coinbase-decentralized-id/',
								keywords: ['guides', 'name service'],
							},
							items: [
								'user/guides/wallets-and-identities/coinbase-decentralized-id/coinbase-decentralized-id-getting-started',
								'user/guides/wallets-and-identities/coinbase-decentralized-id/coinbase-decentralized-id-faqs',
							],
						},
						{
							type: 'category',
							label: 'ENS (.eth)',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/ens/',
								keywords: ['guides', 'name service'],
							},
							items: [
								'user/guides/wallets-and-identities/ens/ens-getting-started',
								'user/guides/wallets-and-identities/ens/ens-faqs',
							],
						},
						{
							type: 'category',
							label: 'Freename TLDs & SLDs',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/freename/',
								keywords: ['guides', 'name service'],
							},
							items: [
								'user/guides/wallets-and-identities/freename/freename-getting-started',
								'user/guides/wallets-and-identities/freename/freename-faqs',
							],
						},
						{
							type: 'category',
							label: 'Lens Protocol (.lens)',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/lens/',
								keywords: ['guides', 'name service'],
							},
							items: [
								'user/guides/wallets-and-identities/lens/lens-getting-started',
								'user/guides/wallets-and-identities/lens/lens-faqs',
							],
						},
						{
							type: 'category',
							label: 'NEAR Protocol (.near)',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/near/',
								keywords: ['guides', 'protocol'],
							},
							items: [
								'user/guides/wallets-and-identities/near/near-getting-started',
								'user/guides/wallets-and-identities/near/near-faqs',
							],
						},
						{
							type: 'category',
							label: 'Unstoppable Domains',
							collapsed: true,
							link: {
								type: 'generated-index',
								slug: 'user/guides/wallets-and-identities/unstoppable-domains/',
								keywords: ['guides', 'name service'],
							},
							items: [
								'user/guides/wallets-and-identities/unstoppable-domains/unstoppable-domains-getting-started',
								'user/guides/wallets-and-identities/unstoppable-domains/unstoppable-domains-faqs',
							],
						},
					],
				},
				{
					type: 'category',
					label: 'Account & Settings',
					link: {
						type: 'generated-index',
						title: 'Mailchain Settings',
						slug: 'user/guides/settings',
						keywords: ['guides', 'settings'],
					},
					items: [{ type: 'autogenerated', dirName: 'user/guides/settings' }],
				},
				{
					type: 'category',
					label: 'Tips & Tricks',
					collapsed: false,
					link: {
						type: 'generated-index',
						title: 'Mailchain Tips & Tricks',
						slug: 'user/guides/tips',
						keywords: ['guides', 'tips'],
					},
					items: [{ type: 'autogenerated', dirName: 'user/guides/tips' }],
				},
			],
		},
	],
	developerSidebar: [
		{
			type: 'doc',
			id: 'developer/index',
			label: 'Introduction',
		},
		{
			type: 'category',
			label: 'Getting Started',
			// link: {
			// 	// slug: 'developer/getting-started',
			// 	// type: 'generated-index',
			// },
			collapsed: false,
			items: ['developer/installation', 'developer/address-formatting'],
		},
		{
			type: 'category',
			label: 'Quickstart',
			// link: {
			// 	type: 'generated-index',
			// },
			collapsed: false,
			items: ['developer/guides/authenticate', 'developer/guides/send'],
		},
		{
			type: 'category',
			label: 'Tutorials',
			collapsed: false,
			items: [
				'developer/tutorials/send-via-api',
				'developer/tutorials/authenticated-webhook',
				{
					type: 'category',
					label: '🔒 Authentication Integrations',
					collapsed: false,
					items: [
						'developer/tutorials/integrations/passport-magic-link-tutorial',
						'developer/tutorials/integrations/stytch-magic-link',
					],
				},
				{
					type: 'category',
					label: '🔔 On-chain Events & Notifications',
					collapsed: false,
					items: [
						'developer/tutorials/integrations/send-mail-on-address-activity-alchemy-notify',
						'developer/tutorials/integrations/hal-notify-on-chain-notifications',
						'developer/tutorials/integrations/tenderly-on-chain-event-notifications',
					],
				},
			],
		},
		{
			type: 'category',
			label: 'Advanced',
			// link: {
			// 	type: 'generated-index',
			// },
			collapsed: false,
			items: [
				'developer/advanced/private-messaging-key',
				'developer/advanced/resolve-address',
				'developer/advanced/send-from-address',
			],
		},
		{
			type: 'category',
			label: 'Other Resources',
			collapsed: false,
			items: ['developer/resources/cla'],
		},
	],
};

module.exports = sidebars;
