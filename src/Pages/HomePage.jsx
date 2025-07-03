import React from 'react';
import HeroSection from '../Components/HomePage/HeroSection';
import Navbar from '../Components/Navbar';
import FeaturedJob from '../Components/HomePage/FeaturedJob';
import JobBenefit from '../Components/HomePage/JobBenefit';
import JobProcess from '../Components/HomePage/JobProcess';
import JobWeOffer from '../Components/HomePage/JobWeOffer';
import JobTalent from '../Components/HomePage/JobTalent';
import JobSteps from '../Components/HomePage/JobSteps';
import Footer from '../Components/Footer';

const Homepage = () => {
  return (
    <div>
        <Navbar />
      <HeroSection />
      <FeaturedJob />
      <JobBenefit />
      <JobProcess />
      <JobWeOffer />
      <JobTalent />
      <JobSteps />
      <Footer />
    </div>
  );
};

export default Homepage;