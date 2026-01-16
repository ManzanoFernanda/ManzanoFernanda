import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../../assets/logo.png';
import LogoWhite from '../../assets/logoWhite.png';
import { useTheme } from '../../context/theme';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';
import LanguageToggle from '../languageToggle/LanguageToggle';

const navLinks = [
	{ id: 1, link: '#home', icon: 'icon-home' },
	{ id: 2, link: '#about', icon: 'icon-user-following' },
	{ id: 3, link: '#services', icon: 'icon-briefcase' },
	{ id: 4, link: '#tech-stack', icon: 'icon-layers' },
	{ id: 5, link: '#resume', icon: 'icon-graduation' },
	{ id: 6, link: '#portfolio', icon: 'icon-layers' },
	{ id: 8, link: '#contact', icon: 'icon-bubble' },
];

const Sidebar = () => {
	const { isDarkMode } = useTheme();
	const { lang } = useLanguage();
	const [toggle, showMenu] = useState(false);
	return (
		<>
			<aside className={toggle ? 'aside show-menu' : 'aside'} onClick={() => showMenu(!toggle)}>
				<div className="nav__header">
					<a href="#home" className="nav__logo">
						<img src={isDarkMode ? LogoWhite : Logo} alt="" className="sidebar__logo" />
					</a>
					<div className="sidebar__lang-toggle">
						<LanguageToggle />
					</div>
				</div>

				<nav className="nav">
					<div className="nav__menu">
						<ul className="nav__list">
							{navLinks.map((link) => (
								<li key={link.id} className="nav__item">
									<a href={link.link} className="nav__link">
										<i className={link.icon}></i>
									</a>
								</li>
							))}
						</ul>
					</div>
				</nav>

				<div className="nav__footer">
					<span className="copyright">(: by Daniela Manzano</span>
				</div>
			</aside>

			<div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
				<div className="burger-icon">
					<span className="burger-bar"></span>
					<span className="burger-bar"></span>
					<span className="burger-bar"></span>
				</div>
			</div>
		</>
	);
};

export default Sidebar;
