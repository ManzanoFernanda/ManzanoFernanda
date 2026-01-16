import React from 'react';
import './Resume.css';
import Card from './Card';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const Resume = () => {
	const { lang } = useLanguage();
	const data = SITE_DATA[lang].resume;

	return (
		<section className="resume container section" id="resume">
			<h2 className="section__title">{data.title}</h2>

			<div className="resume__container">
				<div className="timeline grid">
					<h3 className="timeline__section-title">{data.experienceTitle}</h3>
					{data.experience.map((exp) => (
						<Card key={exp.id} icon={exp.icon} title={exp.title} year={exp.year} desc={exp.desc} logo={exp.logo} />
					))}
				</div>

				<div className="timeline grid">
					<h3 className="timeline__section-title">{data.educationTitle}</h3>
					{data.education.map((edu) => (
						<Card key={edu.id} icon={edu.icon} title={edu.title} year={edu.year} desc={edu.desc} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Resume;
