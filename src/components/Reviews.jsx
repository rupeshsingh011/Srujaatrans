import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useContent, useSiteContent } from '../context/SiteContentContext.jsx';
import './Reviews.css';

const Reviews = () => {
  const t = useContent();
  const { i18n } = useTranslation();
  const lang = (i18n.language || 'en').split('-')[0];
  const { lists } = useSiteContent();
  const reviewsData = lists.reviews.map((r) => ({
    id: r._id,
    name: r.name,
    role: r.role?.[lang] || r.role?.en || '',
    image: r.image,
    text: r.text?.[lang] || r.text?.en || '',
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (reviewsData.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
    }, 6000); // 6 seconds per slide
    
    return () => clearInterval(interval);
  }, [reviewsData.length]);

  if (reviewsData.length === 0) return null;

  const currentReview = reviewsData[currentIndex];

  return (
    <section className="testimonials-section bg-background-1" id="reviews">
      <div className="container testimonials-container">
        
        <div className="testimonials-header">
          <h2>{t('reviews.heading')}</h2>
          <div className="header-underline"></div>
          <p className="testimonials-subtitle">
            {t('reviews.subtitle')}
          </p>
        </div>

        <div className="testimonial-card-wrapper">
          <div className="testimonial-card">
            <div className="quote-icon">
              <svg width="32" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.417 15.181C9.417 19.349 7.027 21 4.71 21 2.215 21 0 19.143 0 16.59c0-2.457 1.83-4.305 4.312-4.305.518 0 .973.085 1.348.183-.357-3.805-2.732-5.464-5.384-6.427l1.09-2.024C5.107 4.542 9.417 7.03 9.417 15.181zm14.583 0c0 4.168-2.39 5.819-4.707 5.819-2.495 0-4.71-1.857-4.71-4.41 0-2.457 1.83-4.305 4.313-4.305.518 0 .972.085 1.348.183-.357-3.805-2.732-5.464-5.384-6.427l1.09-2.024C19.69 4.542 24 7.03 24 15.181z" fill="#93C5FD"/>
              </svg>
            </div>
            
            <p className="testimonial-text">
              {currentReview.text}
            </p>
            
            <div className="testimonial-author">
              <div className="author-image-container">
                {currentReview.image ? (
                  <img src={currentReview.image} alt={currentReview.name} />
                ) : (
                  <div className="placeholder-avatar">{currentReview.name.charAt(0)}</div>
                )}
              </div>
              <div className="author-details">
                <h6>{currentReview.name}</h6>
                <div className="author-role">{currentReview.role}</div>
                <div className="author-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-dots">
            {reviewsData.map((_, idx) => (
              <button 
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Reviews;