import React from 'react';
import './TechStack.css';
import {
  FaReact,
  FaGitAlt,
  FaFigma,
  FaHashtag,
  FaGlobe,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiVite,
  SiXcode,
  SiAndroidstudio,
  SiCypress,
  SiNextdotjs,
  SiDotnet,
} from 'react-icons/si';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const iconMap = {
  'React': <FaReact />,
  'Next.js': <SiNextdotjs />,
  'React Native': <FaReact />,
  'TypeScript': <SiTypescript />,
  'JavaScript': <SiJavascript />,
  'HTML5': <SiHtml5 />,
  'CSS3': <SiCss3 />,
  'Tailwind CSS': <SiTailwindcss />,
  'Figma': <FaFigma />,
  'C# / Blazor': <FaHashtag className="csharp-icon" />,
  '.NET MAUI (UI)': <SiDotnet />,
  'Cypress (E2E)': <SiCypress />,
  'SQL Server': <FaDatabase />,
  'Git': <FaGitAlt />,
  'Vite': <SiVite />,
  'Xcode': <SiXcode />,
  'Android Studio': <SiAndroidstudio />,
};

const TechStack = () => {
  const { lang } = useLanguage();
  const data = SITE_DATA[lang].tech;

  return (
    <section className="tech-stack container section" id="tech-stack">
      <h2 className="section__title">{data.title}</h2>

      <div className="tech-stack__container">
        {data.items.map((tech, index) => (
          <div className="tech-stack__item" key={index}>
            <div className="tech-stack__icon">{iconMap[tech] || <FaReact />}</div>
            <h3 className="tech-stack__name">{tech}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
