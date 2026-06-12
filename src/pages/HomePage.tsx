import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ZeroToOneSection from '../components/ZeroToOneSection';
import MyApproachSection from '../components/MyApproachSection';
import NumberExperienceSection from '../components/NumberExperienceSection';
import ExperienceSection from '../components/ExperienceSection';
import AboutMeSection from '../components/AboutMeSection';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // slight delay to ensure render
    } else {
      window.scrollTo(0, 0);
    }
  }, [location, isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <HeroSection />
      <ZeroToOneSection />
      <MyApproachSection />
      <ExperienceSection />
      <NumberExperienceSection />
      <AboutMeSection />
      <Footer />
    </>
  );
};

export default HomePage;
