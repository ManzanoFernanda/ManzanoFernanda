import React from 'react';
import './Services.css';
import WebImage from '../../assets/servicios/web.png';
import MobileImage from '../../assets/servicios/mobile.png';
import DesignImage from '../../assets/servicios/disenio.png';
import { useTheme } from '../../context/theme';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const Services = () => {
	const { isDarkMode } = useTheme();
	const { lang } = useLanguage();
	const data = SITE_DATA[lang].services;
	const images = [WebImage, MobileImage, DesignImage]; // Web, Mobile, Design

	return (
		<section className="services container section" id="services">
			<h2 className="section__title">{data.title}</h2>
			<div className="services__container grid">
				{data.items.map((service, idx) => (
					<div className="services__card" key={service.id}>
						<img src={images[idx] || WebImage} alt={service.title} className="services__img" />
						<h3 className="services__title">{service.title}</h3>
						<p className="services__description">{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
