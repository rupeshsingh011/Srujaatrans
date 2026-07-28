import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Wait a brief moment for DOM to paint new route
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, img, .project-card, .service-card, .experience-card, .skill-card-lg, .award-card-lg, .slide, .contact-card'
      );
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      const elements = document.querySelectorAll(
        'h1, h2, h3, h4, h5, h6, p, img, .project-card, .service-card, .experience-card, .skill-card-lg, .award-card-lg, .slide, .contact-card'
      );
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);
};

export default useReveal;
