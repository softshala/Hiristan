import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import AboutHeroSection from '../Components/AboutPage/AboutHeroSection';
import AboutStory from '../Components/AboutPage/AboutStory';
import AboutGlobal from '../Components/AboutPage/AboutGlobal';
import AboutReality from '../Components/AboutPage/AboutReality';
import AboutSolution from '../Components/AboutPage/AboutSolution';
import AboutMission from '../Components/AboutPage/AboutMission';
import AboutRealise from '../Components/AboutPage/AboutRealise';



const About = () => {
  return (
    <div>
        <Navbar />
      <AboutHeroSection />
      <AboutStory />
      <AboutGlobal />
      <AboutReality />
      <AboutRealise />
      <AboutMission />
      <AboutSolution />
      <Footer />
    </div>
  );
};

export default About;