import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import ServiceHeroSection from '../Components/Service2/ServiceHeroSection';
import ServiceExpert from '../Components/Service2/ServiceExpert';
import JobSteps from '../Components/Service2/JobSteps';
import JobWeOffer from '../Components/Service2/JobWeOffer';
import ServiceHire from '../Components/Service2/ServiceHire';
import WhyHireService from '../Components/Service2/WhyHireService';
import ServiceFaq from '../Components/Service2/ServiceFaq';


const ServicePage2 = () => {
  return (
    <div>
      <Navbar />
      <ServiceHeroSection />
      <ServiceExpert />
      <ServiceHire />
      <JobWeOffer />
      <JobSteps />  
      <WhyHireService />
      <ServiceFaq />
      <Footer />
    </div>
  );
};

export default ServicePage2;