import React from 'react';
import './Home.css';
import Me from '../../assets/myface.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import TextType from '../../animations/textType/TextType';
import { useLanguage } from '../../context/language';

const Home = () => {
	const { data } = useLanguage();
	return (
		<section className="home container" id="home">
			<div className="intro">
				<div className="home__img-wrapper">
					<img src={Me} alt="" className="home__img" />
					<div className="home__img-decoration"></div>
				</div>
				<h1 className="home__name">{data.person.name}</h1>
				<span className="home__education">{data.person.role}</span>
				<div className="memphis-bg-texttype">
					<TextType text={data.home.taglines} typingSpeed={75} pauseDuration={2000} showCursor={true} cursorCharacter="●" />
				</div>
				<HeaderSocials />
				<a href="#contact" className="btn">
					{data.home.cta}
				</a>
			</div>
			<ScrollDown />
			<Shapes />
		</section>
	);
};

export default Home;
