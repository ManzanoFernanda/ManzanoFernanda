import React from 'react';
import './LanguageToggle.css';
import { useLanguage } from '../../context/language';

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-toggle" aria-label="Language toggle">
      <button
        type="button"
        className={lang === 'es' ? 'lang-toggle__btn lang-toggle__btn--active' : 'lang-toggle__btn'}
        onClick={() => setLang('es')}
      >
        ES
      </button>
      <button
        type="button"
        className={lang === 'en' ? 'lang-toggle__btn lang-toggle__btn--active' : 'lang-toggle__btn'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;


