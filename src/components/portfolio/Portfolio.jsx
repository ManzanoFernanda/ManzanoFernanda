import { useState, useMemo, useEffect } from 'react';
import './Portfolio.css';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';
import ahc from '../../assets/portadaproyecto/ahc.png';
import ahs from '../../assets/portadaproyecto/ahs.png';
import al1 from '../../assets/portadaproyecto/al1.png';
import taurusAppPortada from '../../assets/portadaproyecto/portadaapptaurus.png';
import ecommercePortada from '../../assets/portadaproyecto/portadaecommerce.png';
import totemPortada from '../../assets/portadaproyecto/portadatotemtaurus.png';

const coverImages = {
	1: ecommercePortada,
	2: taurusAppPortada,
	3: ahc,
	4: al1,
	5: ahs,
	7: totemPortada
};

const shortTitles = {
	1: 'Ecommerce Taurus',
	2: 'Taurus App',
	3: 'HPY Camper',
	4: 'Alize 2.0',
	5: 'Hypervisoul',
	7: 'Totem Autoservicio'
};

const titleHeights = {
	1: 150,
	2: 150,
	3: 150,
	4: 65,
	5: 150,
	7: 150
};

const hpyImageDimensions = {
	0: { width: 200, height: 200, spanColumns: 1 },
	1: { width: 200, height: 200, spanColumns: 1 },
	2: { width: 300, height: 300, spanColumns: 2 },
	3: { width: 300, height: 300, spanColumns: 2 },
	4: { width: 200, height: 200, spanColumns: 1 },
	5: { width: 200, height: 200, spanColumns: 1 }
};

const taurusAppCustomDescription = 'Cree una nueva version de la aplicación móvil rediseniando desde cero, manteniendo las funcionalidades anteriores e incorporando nuevas. El rediseño aumentó la compatibilidad entre dispositivos, redujo el tamaño de la aplicación, maximizó el rendimiento y redujo en un 90% la tasa de fallos y malas reseñas de usuarios comparado con la versión anterior. Integrada con ecommerce mediante APIs REST. Incluye autenticación con soporte biométrico (Face ID/Touch ID), push notifications con OneSignal, catálogo de gimnasios con geolocalización y cálculo de distancia, reproductor de videos de entrenamiento (Vimeo) con sistema de cache, gestión de beneficios y descuentos, noticias y contenido dinámico. Arquitectura con React Navigation (Stack, Drawer, Bottom Tabs), Context API para estado global, AsyncStorage para persistencia, Error Boundaries para manejo de errores, diseño responsive para tablet y móvil. Optimizaciones: cache de contenido multimedia, manejo de errores de red, lazy loading, ProGuard para builds de producción y Hermes engine. La app tiene +10,000 usuarios activos.';

const Portfolio = () => {
	const { lang } = useLanguage();
	const data = SITE_DATA[lang].portfolio;
	const [selectedProjectId, setSelectedProjectId] = useState(data.items[0]?.id || null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const selectedProject = data.items.find(item => item.id === selectedProjectId) || data.items[0];

	const carouselImages = useMemo(() => {
		if (!selectedProject) return [];
		return selectedProject.carouselImages && selectedProject.carouselImages.length > 0 
			? selectedProject.carouselImages 
			: (selectedProject.image ? [selectedProject.image] : []);
	}, [selectedProject]);

	useEffect(() => {
		setCurrentImageIndex(0);
	}, [selectedProjectId]);
			
	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
	};

	const goToImage = (index) => {
		setCurrentImageIndex(index);
	};

	return (
		<section className="work container section" id="portfolio">
			<h2 className="section__title">{data.title}</h2>
			
			<div className="work__layout">
				<div className="work__menu">
					{data.items.map((item) => {
						const coverImage = coverImages[item.id] || item.image;
						const isSelected = selectedProjectId === item.id;
						const shortTitle = shortTitles[item.id] || item.title;

					return (
							<div
								key={item.id}
								className={`work__menu-item ${isSelected ? 'active' : ''}`}
								onClick={() => setSelectedProjectId(item.id)}
							>
								<img 
									src={coverImage} 
									alt={shortTitle} 
									className="work__menu-image" 
								/>
								<span className="work__menu-title">{shortTitle}</span>
						</div>
					);
				})}
				</div>

			<div className={`work__carousel-wrapper ${selectedProject.id === 2 || selectedProject.id === 7 ? 'work__carousel-wrapper--two-columns' : ''}`}>
				{selectedProject.id === 2 || selectedProject.id === 7 ? (
					<>
						<div className="work__carousel-container work__carousel-container--left">
							{carouselImages.length > 0 ? (
								<div className="work__carousel">
									<div className="work__carousel-main">
										<img 
											src={carouselImages[currentImageIndex]} 
											alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
											className="work__carousel-image"
										/>
									</div>

									{carouselImages.length > 1 && (
										<>
											<button 
												className="work__carousel-btn work__carousel-btn--prev"
												onClick={prevImage}
												aria-label="Imagen anterior"
											>
												‹
											</button>
											<button 
												className="work__carousel-btn work__carousel-btn--next"
												onClick={nextImage}
												aria-label="Imagen siguiente"
											>
												›
											</button>

											<div className="work__carousel-dots">
												{carouselImages.map((_, index) => (
													<button
														key={index}
														className={`work__carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
														onClick={() => goToImage(index)}
														aria-label={`Ir a imagen ${index + 1}`}
													/>
												))}
											</div>

											<div className="work__carousel-counter">
												{currentImageIndex + 1} / {carouselImages.length}
											</div>
										</>
									)}
								</div>
							) : (
								<div className="work__carousel-empty">
									<p></p>
								</div>
							)}
						</div>

						<div className="work__project-description work__project-description--right">
							<div className="work__project-title-wrapper">
								<h3 className="work__project-title">{selectedProject.title}</h3>
								{selectedProject.link && selectedProject.link !== '#' && (
									<a 
										href={selectedProject.link} 
										target="_blank" 
										rel="noopener noreferrer"
										className="work__project-link-btn"
									>
										{lang === 'es' ? 'VER PROYECTO' : 'VIEW PROJECT'}
									</a>
								)}
							</div>
							<p>{selectedProject.id === 2 ? taurusAppCustomDescription : selectedProject.description}</p>
						</div>
					</>
				) : (
					<>
						{selectedProject.description && (
							<div className="work__project-description">
								<div className="work__project-title-wrapper">
									<h3 className="work__project-title">{selectedProject.title}</h3>
									{selectedProject.link && selectedProject.link !== '#' && (
										<a 
											href={selectedProject.link} 
											target="_blank" 
											rel="noopener noreferrer"
											className="work__project-link-btn"
										>
											{lang === 'es' ? 'VER PROYECTO' : 'VIEW PROJECT'}
										</a>
									)}
								</div>
								<p>{selectedProject.description}</p>
							</div>
						)}

						<div className="work__carousel-container">
							{carouselImages.length > 0 ? (
								<div className="work__carousel">
									<div className="work__carousel-main">
										<img 
											src={carouselImages[currentImageIndex]} 
											alt={`${selectedProject.title} - Imagen ${currentImageIndex + 1}`}
											className="work__carousel-image"
										/>
									</div>

									{carouselImages.length > 1 && (
										<>
											<button 
												className="work__carousel-btn work__carousel-btn--prev"
												onClick={prevImage}
												aria-label="Imagen anterior"
											>
												‹
											</button>
											<button 
												className="work__carousel-btn work__carousel-btn--next"
												onClick={nextImage}
												aria-label="Imagen siguiente"
											>
												›
											</button>

											<div className="work__carousel-dots">
												{carouselImages.map((_, index) => (
													<button
														key={index}
														className={`work__carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
														onClick={() => goToImage(index)}
														aria-label={`Ir a imagen ${index + 1}`}
													/>
												))}
											</div>

											<div className="work__carousel-counter">
												{currentImageIndex + 1} / {carouselImages.length}
											</div>
										</>
									)}
								</div>
							) : (
								<div className="work__carousel-empty">
									<p></p>
								</div>
							)}
						</div>
					</>
				)}
			</div>
			</div>

		</section>
	);
};

export default Portfolio;
