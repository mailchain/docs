import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	description: JSX.Element;
};

export function Feature({ title, Svg, description }: FeatureItem) {
	return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export interface HomepageFeaturesProps {
	featureList: FeatureItem[];
}

export default function HomepageFeatures(props: HomepageFeaturesProps): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{props.featureList.map((x, idx) => (
						<Feature key={idx} {...x} />
					))}
				</div>
			</div>
		</section>
	);
}
