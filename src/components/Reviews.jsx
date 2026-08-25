import React from 'react';
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

  return (
    <section className="testimonials-section bg-background-1" id="reviews">
      <div className="container testimonials-container">
        <div className="testimonials-left">
          <div className="section-title">
            <div className="caption-outer">
              <span className="caption-title">{t('reviews.title')}</span>
            </div>
            <h2>{t('reviews.heading')}</h2>
          </div>
        </div>

        <div className="testimonials-right">
          <div className="marquee-wrapper">
            <div className="slider">
              {[...reviewsData, ...reviewsData].map((review, index) => (
                <div className="slide" key={`${review.id}-${index}`}>
                  <div className="slide-inner">
                    <div className="slide-top">
                      <div className="image-container">
                        {review.image ? <img src={review.image} alt="User" /> : <div className="placeholder-avatar">U</div>}
                      </div>
                      <div>
                        <h6>{review.name}</h6>
                        <div className="slide-role">{review.role}</div>
                      </div>
                    </div>
                    <div className="slide-content">
                      {review.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;