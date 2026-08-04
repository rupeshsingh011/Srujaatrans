import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
  const { t } = useTranslation();
  useReveal();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    sendMessage: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "Full Name": formData.fullName,
          "Email": formData.email,
          "Phone": `${formData.countryCode} ${formData.phone}`,
          "Send Message": formData.sendMessage,
        }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ fullName: '', email: '', countryCode: '+91', phone: '', sendMessage: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <main style={{ marginTop: '80px', paddingBottom: '40px' }}>
      <section className="contact-page-section">
        <div className="container contact-page-container">
          <div className="contact-left">
            <div className="section-title">
              <div className="caption-outer">
                <span className="caption-title">{t('contact.title')}</span>
              </div>
              <h1>{t('contact.heading')}</h1>
            </div>

            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-label">{t('contact.contactUs')}</div>
                <a href="tel:+91 9850994406" className="contact-data">+91 9850994406</a>
              </div>
              <div className="contact-card">
                <div className="contact-label">{t('contact.email')}</div>
                <a href="mailto:jobs@srujaatrans" className="contact-data">jobs@srujaatrans</a>
              </div>
              <div className="contact-card">
                <div className="contact-label">{t('contact.followUs')}</div>
                <div className="social-wrap">
                  <a href="#" className="social-link"><img src="https://cdn.prod.website-files.com/6745a980958c413667256214/6746f7dc2ac0e59b96f217d0_footer-icon-02.svg" alt="LinkedIn" /></a>
                  <a href="https://wa.me/9850994406" className="social-link" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-outer">
              <div className="form-block">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="form-inner">
                    <label className="field-label">{t('contact.fullName')}</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="text-field name" placeholder={t('contact.enterName')} required />
                  </div>
                  <div className="form-inner">
                    <label className="field-label">{t('contact.email')}</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="text-field email" placeholder={t('contact.enterEmail')} required />
                  </div>
                  <div className="form-inner full-width">
                    <label className="field-label">{t('contact.phone')}</label>
                    <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                      <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="text-field" style={{ width: '120px', flexShrink: 0 }}>
                        <option value="+91">+91 (IN)</option>
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+49">+49 (DE)</option>
                      </select>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="text-field phone" placeholder={t('contact.enterPhone')} required style={{ flex: 1, minWidth: 0, width: 'auto' }} />
                    </div>
                  </div>
                  <div className="form-inner full-width">
                    <label className="field-label">{t('contact.sendMessage')}</label>
                    <textarea name="sendMessage" value={formData.sendMessage} onChange={handleChange} className="text-field message" placeholder={t('contact.enterMessage')} required></textarea>
                  </div>
                  <button type="submit" className="btn-primary form-submit">{t('contact.submit')}</button>
                  {status && <div style={{ gridColumn: 'span 2', marginTop: '15px', color: status.includes('success') ? 'green' : 'red', fontWeight: '500' }}>{status}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;