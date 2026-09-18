import React from 'react';
import { Languages, FileEdit, Globe, Clapperboard, Mic, ShieldCheck, MonitorCheck } from 'lucide-react';
import { useContent } from '../context/SiteContentContext.jsx';
import './ServicesSection.css';

const ServicesSection = () => {
  const t = useContent();

  const services = [
    { icon: <Languages size={32} strokeWidth={1.5} />, title: t('services.srv1'), subtitle: t('services.srv1Desc') },
    { icon: <FileEdit size={32} strokeWidth={1.5} />, title: t('services.srv2'), subtitle: t('services.srv2Desc') },
    { icon: <Globe size={32} strokeWidth={1.5} />, title: t('services.srv3'), subtitle: t('services.srv3Desc') },
    { icon: <Clapperboard size={32} strokeWidth={1.5} />, title: t('services.srv4'), subtitle: t('services.srv4Desc') },
    { icon: <Mic size={32} strokeWidth={1.5} />, title: t('services.srv5'), subtitle: t('services.srv5Desc') },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: t('services.srv6'), subtitle: t('services.srv6Desc') },
    { icon: <MonitorCheck size={32} strokeWidth={1.5} />, title: t('services.srv7'), subtitle: t('services.srv7Desc') },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '0' }}>
          <h2>{t('services.title')}</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-glass-card" key={index}>
              <div className="service-glass-icon">
                {service.icon}
              </div>
              <h5 className="service-glass-title">{service.title}</h5>
              <p className="service-glass-subtitle">{service.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;