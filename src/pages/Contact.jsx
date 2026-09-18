import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { useContent } from '../context/SiteContentContext.jsx';
import './Contact.css';

const Contact = () => {
  const t = useContent();
  const phone = t('footer.phone') || '+91 9850994406';
  const email = t('footer.email') || 'connect@srujaatrans.com';
  const phoneDigits = phone.replace(/[^\d]/g, '');
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
      const response = await fetch('/api/contact', {
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
    <main className="contact-page-main">
      <section className="contact-page-section contact-page-section-flush">
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
                <div className="contact-label">{t('contact.followUs')}</div>
                <div className="social-wrap">
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Facebook">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
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
                    <div className="phone-field-group">
                      <select name="countryCode" value={formData.countryCode} onChange={handleChange} className="text-field country-code-field">
                        <option value="+91">+91 (IN)</option>
                        <option value="+1">+1 (US/CA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (AU)</option>
                        <option value="+49">+49 (DE)</option>
                      </select>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="text-field phone" placeholder={t('contact.enterPhone')} required />
                    </div>
                  </div>
                  <div className="form-inner full-width">
                    <label className="field-label">{t('contact.sendMessage')}</label>
                    <textarea name="sendMessage" value={formData.sendMessage} onChange={handleChange} className="text-field message" placeholder={t('contact.enterMessage')} required></textarea>
                  </div>
                  <button type="submit" className="btn-primary form-submit">{t('contact.submit')}</button>
                  {status && <div className={`form-status ${status.includes('success') ? 'success' : status.includes('Failed') ? 'error' : ''}`}>{status}</div>}
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