import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';
import { useTheme } from '../../context/theme';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const Services = () => {
	const { isDarkMode } = useTheme();
	const { lang } = useLanguage();
	const data = SITE_DATA[lang].services;
	const images = [Image2, Image3, Image1]; // Web, Mobile, Design

	return (
		<section className="services container section" id="services">
			<h2 className="section__title">{data.title}</h2>
			<div className="services__container grid">
				{data.items.map((service, idx) => (
					<div className="services__card" key={service.id}>
						<img src={images[idx] || Image1} alt={service.title} className="services__img" />
						<h3 className="services__title">{service.title}</h3>
						<p className="services__description">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
