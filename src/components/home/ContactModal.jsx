import React, { useState } from 'react';
import { useLanguage } from '../../context/language';
import { SITE_DATA } from '../../content/siteData.jsx';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const data = SITE_DATA[lang].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS no está configurado correctamente');
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'danielamanzano.dev@gmail.com',
        },
        publicKey
      );

      toast.success(data.toast.success);
      setFormData({ name: '', email: '', subject: '', message: '' });
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error(data.toast.error);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal__close" onClick={onClose} aria-label="Cerrar">
          ×
        </button>
        <h2 className="contact-modal__title">{data.headline}</h2>
        <form className="contact-modal__form" onSubmit={handleSubmit}>
          <div className="contact-modal__field">
            <input
              type="text"
              name="name"
              placeholder={data.placeholders.name}
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-modal__input"
            />
          </div>
          <div className="contact-modal__field">
            <input
              type="email"
              name="email"
              placeholder={data.placeholders.email}
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-modal__input"
            />
          </div>
          <div className="contact-modal__field">
            <input
              type="text"
              name="subject"
              placeholder={data.placeholders.subject}
              value={formData.subject}
              onChange={handleChange}
              required
              className="contact-modal__input"
            />
          </div>
          <div className="contact-modal__field">
            <textarea
              name="message"
              placeholder={data.placeholders.message}
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="contact-modal__textarea"
            />
          </div>
          <button
            type="submit"
            className="contact-modal__submit btn"
            disabled={isSending}
          >
            {isSending ? data.sending : data.send}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
