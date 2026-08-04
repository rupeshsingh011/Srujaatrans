import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';

import martaImg from '../assets/Marta_Esteban.jpg';
import georgiImg from '../assets/Georgi.png';
import elanguageImg from '../assets/eLanguageWorld.png';
import denverImg from '../assets/denver.jpg';
import iconicImg from '../assets/iconic.jpg';
import lcImg from '../assets/lc.jpg';
import saudisoftImg from '../assets/saudisoft.png';
import tradoonImg from '../assets/tradoon.jpg';
import vokianImg from '../assets/vokian.jpg';
import devdattaImg from '../assets/Devdatta.gif';

const reviewsData = [
  {
    id: 1,
    nameKey: 'reviews.r1Name',
    roleKey: 'reviews.r1Role',
    image: martaImg,
    textKey: 'reviews.r1Text'
  },
  {
    id: 2,
    nameKey: 'reviews.r2Name',
    roleKey: 'reviews.r2Role',
    image: georgiImg,
    textKey: 'reviews.r2Text'
  },
  {
    id: 3,
    nameKey: 'reviews.r3Name',
    roleKey: 'reviews.r3Role',
    image: elanguageImg,
    textKey: 'reviews.r3Text'
  },
  {
    id: 4,
    nameKey: 'reviews.r4Name',
    roleKey: 'reviews.r4Role',
    image: saudisoftImg,
    textKey: 'reviews.r4Text'
  },
  {
    id: 5,
    nameKey: 'reviews.r5Name',
    roleKey: 'reviews.r5Role',
    image: lcImg,
    textKey: 'reviews.r5Text'
  },
  {
    id: 6,
    nameKey: 'reviews.r6Name',
    roleKey: 'reviews.r6Role',
    image: devdattaImg,
    textKey: 'reviews.r6Text'
  },
  {
    id: 7,
    nameKey: 'reviews.r7Name',
    roleKey: 'reviews.r7Role',
    image: iconicImg,
    textKey: 'reviews.r7Text'
  },
  {
    id: 8,
    nameKey: 'reviews.r8Name',
    roleKey: 'reviews.r8Role',
    image: tradoonImg,
    textKey: 'reviews.r8Text'
  },
  {
    id: 9,
    nameKey: 'reviews.r9Name',
    roleKey: 'reviews.r9Role',
    image: denverImg,
    textKey: 'reviews.r9Text'
  },
  {
    id: 10,
    nameKey: 'reviews.r10Name',
    roleKey: 'reviews.r10Role',
    image: vokianImg,
    textKey: 'reviews.r10Text'
  }
];

const Reviews = () => {
  const { t } = useTranslation();

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
                        <img src={review.image} alt="User" />
                      </div>
                      <div>
                        <h6>{t(review.nameKey)}</h6>
                        <div className="slide-role">{t(review.roleKey)}</div>
                      </div>
                    </div>
                    <div className="slide-content">
                      {t(review.textKey)}
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