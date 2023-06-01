import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures, { FeatureItem } from '../components/featureList/featureList';
import styles from './index.module.css';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className="container">
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="user/guides/getting-started">
						Getting Started Tutorial - 5min ⏱️
					</Link>
				</div>
			</div>
		</header>
	);
}
const featureList: FeatureItem[] = [
	{
		title: 'Explore',
		Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
		description: (
			<>
				Explore Mailchain's key concepts, covering security, identity, encryption, tokenomics, governance, and
				more.
			</>
		),
	},
	{
		title: 'Learn',
		Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
		description: <>Learn how to use Mailchain with clear guides, tutorials, and frequently asked questions.</>,
	},
	{
		title: 'Develop',
		Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
		description: <>Integrate communication into your application or contribute to Mailchain protocol.</>,
	},
];
export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Welcome to ${siteConfig.title} Docs`}
			description="Everything you need to get hands on with Mailchain"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures featureList={featureList} />
			</main>
		</Layout>
	);
}
