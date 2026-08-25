import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const REVEAL_SELECTOR =
  'h1, h2, h3, h4, h5, h6, p, img, .project-card, .service-card, .experience-card, .skill-card-lg, .award-card-lg, .slide, .contact-card';

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

    const observeAll = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.observe(el));
    };

    // Wait a brief moment for DOM to paint new route
    const timeout = setTimeout(observeAll, 100);

    // Some sections (reviews, skills, etc.) render after an async data
    // fetch and can mount well after the initial 100ms window — watch for
    // DOM insertions so those elements get observed too, instead of
    // staying invisible forever.
    const mutationObserver = new MutationObserver(observeAll);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      mutationObserver.disconnect();
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);
};

export default useReveal;
