import React, { useEffect } from 'react';
import './Contact.css';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';

const Contact = () => {
  const { lang } = useLanguage();
  const data = SITE_DATA[lang].contact;
  
  useEffect(() => {
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">{data.title}</h2>

      <div className="contact__container">
        <div className="contact__schedule">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/danielamanzano-dev"
            style={{ width: '100%', height: '700px', minWidth: '100%' }}
          ></div>
        </div>
      </div>

    </section>
  );
};

export default Contact;