import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FaqSection.css';

const FaqSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    }
  ];

  return (
    <section className="faq-section">
      <div className="container faq-container">
        <div className="faq-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('faq.title')}</span>
            </div>
            <h2>{t('faq.heading')}</h2>
          </div>
        </div>

        <div className="faq-right">
          <div className="faq-block">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="faq-question-block">
                  <h6 className="faq-question">{faq.question}</h6>
                  <div className="plus-icon">
                    <div className="vertical-line"></div>
                    <div className="horizontal-line"></div>
                  </div>
                </div>
                <div className="faq-answer-block">
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;