import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ZeroToOneSection from './components/ZeroToOneSection';
import MyApproachSection from './components/MyApproachSection';
import NumberExperienceSection from './components/NumberExperienceSection';
import ExperienceSection from './components/ExperienceSection';
import AboutMeSection from './components/AboutMeSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div className="App">
        <CustomCursor />
        <HeroSection />
        <ZeroToOneSection />
        <MyApproachSection />
        <ExperienceSection />
        <NumberExperienceSection />
        <AboutMeSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
