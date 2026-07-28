import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ServicesSection from '../components/ServicesSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import Companies from '../components/Companies';
import Reviews from '../components/Reviews';
import FaqSection from '../components/FaqSection';
import useReveal from '../hooks/useReveal';

const Home = () => {
  useReveal();

  return (
    <main style={{ marginTop: '0', paddingBottom: '40px' }}>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <Companies />
      <Reviews />
      <FaqSection />
    </main>
  );
};

export default Home;