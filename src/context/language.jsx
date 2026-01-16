import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { SITE_DATA, SUPPORTED_LANGS } from '../content/siteData.jsx';

const LanguageContext = createContext(null);

function normalizeLang(value) {
  const lower = String(value || '').toLowerCase();
  if (SUPPORTED_LANGS.includes(lower)) return lower;
  return null;
}

function getInitialLang() {
  const url = new URL(window.location.href);
  const qp = normalizeLang(url.searchParams.get('lang'));
  if (qp) return qp;

  const stored = normalizeLang(window.localStorage.getItem('lang'));
  if (stored) return stored;

  const browser = (navigator.language || 'es').toLowerCase();
  if (browser.startsWith('es')) return 'es';
  return 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
  }, [lang]);

  const value = useMemo(() => {
    const data = SITE_DATA[lang] ?? SITE_DATA.es;
    return {
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
      data,
    };
  }, [lang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider />');
  return ctx;
}


