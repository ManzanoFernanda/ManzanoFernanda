import React from 'react';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const AboutBox = () => {
	const { lang } = useLanguage();
	const stats = SITE_DATA[lang].about.stats;

	return (
		<div className="about__boxes grid">
			{stats.map((stat) => (
				<div className="about__box" key={stat.id}>
					<i className={`about__icon ${stat.icon}`}></i>
					<div>
						<h3 className="about__title">{stat.title}</h3>
						<span className="about__subtitle">{stat.subtitle}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default AboutBox;
