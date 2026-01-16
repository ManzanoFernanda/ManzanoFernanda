import React from 'react';
import './About.css';
import logo from '../../assets/me.jpg.jpeg';
import AboutBox from './AboutBox';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const About = () => {
	const { lang } = useLanguage();
	const data = SITE_DATA[lang].about;

	return (
		<section className="about container section" id="about">
			<div className="about__container grid">
				<div className="about__image__Wrapper">
					<img src={logo} alt="" className="about__img" />
					<a href={data.cvHref} target="_blank" rel="noopener noreferrer" className="btn" title={data.downloadCvHint}>
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '15px' }}>
							<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							<polyline points="7 10 12 15 17 10" />
							<line x1="12" y1="15" x2="12" y2="3" />
						</svg>
						{data.downloadCv}
					</a>
				</div>

				<div className="about__data grid">
					<div className="about__info">
						{data.paragraphs.map((para, idx) => (
							<p key={idx} className="about__description">{para}</p>
						))}
					</div>
				</div>
			</div>
			<AboutBox />
			<div className="about__expertise">
				<div className="about__expertise-list">
					{data.badges.map((badge, idx) => (
						<span key={idx} className="expertise-badge">{badge}</span>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
