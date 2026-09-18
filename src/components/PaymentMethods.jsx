import React, { useState, useEffect } from 'react';
import { Landmark, CheckCircle2, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';
import './PaymentMethods.css';
import { useTranslation } from 'react-i18next';
import useReveal from '../hooks/useReveal';

export default function PaymentMethods() {
  const { t } = useTranslation();
  const [activeMethod, setActiveMethod] = useState(null);
  const [selectedBank, setSelectedBank] = useState('hdfc');
  useReveal();

  useEffect(() => {
    console.log('PaymentMethods component mounted!');
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeMethod === 'paypal') {
      const timer = setTimeout(() => {
        const container = document.getElementById('paypal-container-WR9DH2KCZPZPE');
        if (container && window.paypal && !container.hasChildNodes()) {
          window.paypal.HostedButtons({
            hostedButtonId: "WR9DH2KCZPZPE",
          }).render("#paypal-container-WR9DH2KCZPZPE");
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeMethod]);

  const selectMethod = (id) => {
    setActiveMethod(id);
    // Scroll slightly down to show the panel smoothly on mobile
    setTimeout(() => {
      const panel = document.getElementById('payment-details-panel');
      if (panel) {
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  };

  const methods = [
    {
      id: 'paypal',
      title: t('payment.paypal_title'),
      desc: t('payment.paypal_desc'),
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="pm-brand-img" />,
      panelTitle: t('payment.paypal_panelTitle'),
      panelContent: (
        <div className="pm-panel-form">
          <div id="paypal-container-WR9DH2KCZPZPE" style={{ marginTop: '20px' }}></div>
        </div>
      )
    },
    {
      id: 'payoneer',
      title: t('payment.payoneer_title'),
      desc: t('payment.payoneer_desc'),
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Payoneer_logo.svg" alt="Payoneer" className="pm-brand-img payoneer-img" />,
      panelTitle: t('payment.payoneer_panelTitle'),
      panelContent: (
        <div className="pm-panel-form">
          <button className="pm-cta-btn payoneer-btn">
            <ShieldCheck size={20} />
            {t('payment.payoneer_confirmBtn')}
          </button>
        </div>
      )
    },
    {
      id: 'upi',
      title: t('payment.upi_title'),
      desc: t('payment.upi_desc'),
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" alt="UPI" className="pm-brand-img upi-img" />,
      panelTitle: t('payment.upi_panelTitle'),
      panelContent: (
        <div className="pm-panel-form" style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="/upi-qr.png"
            alt="UPI QR Code"
            style={{ width: '100%', maxWidth: '250px', height: 'auto', borderRadius: '12px', marginLeft: '55px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
        </div>
      )
    },
    {
      id: 'bank',
      title: t('payment.bank_title'),
      desc: t('payment.bank_desc'),
      icon: (
        <div className="pm-multi-bank-icons">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" alt="HDFC" className="pm-brand-img hdfc-img" />
          <img src="/deutsche-bank-logo.png" alt="Deutsche Bank" className="pm-brand-img deutsche-img" />
        </div>
      ),
      panelIcon: selectedBank === 'hdfc'
        ? <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" alt="HDFC" className="pm-brand-img hdfc-img" />
        : <img src="/deutsche-bank-logo.png" alt="Deutsche Bank" className="pm-brand-img deutsche-img" />,
      panelTitle: selectedBank === 'hdfc' ? t('payment.bank_panelTitleHdfc') : t('payment.bank_panelTitleDeutsche'),
      panelContent: (
        <div className="pm-panel-form">
          <div className="pm-bank-selector">
            <button
              className={`pm-bank-tab ${selectedBank === 'hdfc' ? 'active' : ''}`}
              onClick={() => setSelectedBank('hdfc')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg" alt="HDFC" />
              {t('payment.bank_hdfcTab')}
            </button>
            <button
              className={`pm-bank-tab ${selectedBank === 'deutsche' ? 'active' : ''}`}
              onClick={() => setSelectedBank('deutsche')}
            >
              <img src="/deutsche-bank-logo.png" alt="Deutsche Bank" />
              {t('payment.bank_deutscheTab')}
            </button>
          </div>

          <div className="pm-bank-grid">
            <div className="pm-info-row">
              <span className="pm-info-label">{t('payment.bank_accHolder')}</span>
              <span className="pm-info-value">Srujaa Translations LLP</span>
            </div>
            <div className="pm-info-row">
              <span className="pm-info-label">{t('payment.bank_bankName')}</span>
              <span className="pm-info-value">{selectedBank === 'hdfc' ? 'HDFC Bank' : 'Deutsche Bank'}</span>
            </div>
            <div className="pm-info-row">
              <span className="pm-info-label">{t('payment.bank_accNumber')}</span>
              <span className="pm-info-value">{selectedBank === 'hdfc' ? '50200100336273' : '000029631890019'}</span>
            </div>
            <div className="pm-info-row">
              <span className="pm-info-label">{t('payment.bank_ifscSwift')}</span>
              <span className="pm-info-value">
                {selectedBank === 'hdfc'
                  ? 'IFSC: HDFC0009228'
                  : 'IFSC: DEUT0278PBC / SWIFT: DEUTUS33XXX'}
              </span>
            </div>
            {selectedBank === 'deutsche' && (
              <div className="pm-info-row">
                <span className="pm-info-label">MICR Code</span>
                <span className="pm-info-value">110200003</span>
              </div>
            )}
            <div className="pm-info-row" style={{ gridColumn: '1 / -1' }}>
              <span className="pm-info-label">Bank Address</span>
              <span className="pm-info-value">
                {selectedBank === 'hdfc'
                  ? 'Shop No 5 & 6, Gardenia Square, Crossings Republik, Ghaziabad, Uttar Pradesh 201016'
                  : 'K2, 3rd Floor, Som Datta Tower, Sector-18, Noida, Uttar Pradesh-201301'}
              </span>
            </div>
          </div>

          <button className="pm-cta-btn bank-btn">
            <ShieldCheck size={20} />
            {selectedBank === 'hdfc' ? t('payment.bank_confirmHdfcBtn') : t('payment.bank_confirmDeutscheBtn')}
          </button>
        </div>
      )
    }
  ];

  const activeMethodData = methods.find(m => m.id === activeMethod);

  return (
    <div className="pm-page">
      <div className="pm-hero">
        <div className="container">
          <h1 className="pm-hero-title">{t('payment.title')}</h1>
          <p className="pm-hero-subtitle">{t('payment.subtitle')}</p>
        </div>
      </div>

      <div className="container pm-main-content">
        <div className="pm-grid">
          {methods.map((method) => {
            const isActive = activeMethod === method.id;
            return (
              <div
                key={method.id}
                className={`pm-card ${isActive ? 'pm-card-active' : ''}`}
                onClick={() => selectMethod(method.id)}
              >
                {isActive && (
                  <div className="pm-card-badge">
                    <CheckCircle2 size={16} />
                  </div>
                )}
                <div className="pm-card-icon-wrapper">
                  {method.icon}
                </div>
                <h3 className="pm-card-title">{method.title}</h3>
                <p className="pm-card-desc">{method.desc}</p>
              </div>
            );
          })}
        </div>

        <div
          id="payment-details-panel"
          className={`pm-panel-wrapper ${activeMethod ? 'pm-panel-visible' : ''} ${activeMethod === 'bank' ? 'pm-bank-wrapper' : ''}`}
        >
          {activeMethodData && (
            <div className="pm-panel">
              <div className="pm-panel-header">
                <div className="pm-panel-icon">
                  {activeMethodData.panelIcon || activeMethodData.icon}
                </div>
                <h2 className="pm-panel-title">{activeMethodData.panelTitle}</h2>
              </div>

              <div className="pm-panel-body">
                {activeMethodData.panelContent}
              </div>

              <div className="pm-secure-badge">
                <ShieldCheck size={16} />
                <span>{t('payment.secureConnection')}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
