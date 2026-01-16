import React, { useState } from 'react';
import { useLanguage } from '../../context/language';
import ContactModal from './ContactModal';

const HeaderSocials = () => {
  const { data } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const socialLinks = [
    {
      id: 1,
      icon: 'fa-brands fa-linkedin',
      link: data.person.linkedin,
      label: 'LinkedIn',
    },
    {
      id: 2,
      icon: 'fa-brands fa-github',
      link: 'https://github.com/ManzanoFernanda',
      label: 'GitHub',
    },
    {
      id: 3,
      icon: 'fa-solid fa-envelope',
      link: '#',
      label: 'Email',
    },
    {
      id: 4,
      icon: 'fa-brands fa-whatsapp',
      link: 'https://wa.me/5493518000033?text=Hola%20Daniela%2C%20me%20comunico%20desde%20tu%20portfolio',
      label: 'WhatsApp',
    },
  ];

  const handleEmailClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="home__socials">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="home__social-link"
            target={link.id === 3 ? undefined : '_blank'}
            onClick={link.id === 3 ? handleEmailClick : undefined}
            {...(link.id !== 3 && { rel: 'noopener noreferrer' })}
            aria-label={link.label}
          >
            <i className={link.icon} aria-hidden="true"></i>
          </a>
        ))}
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeaderSocials;
