import React from 'react';
import Navbar from '../Components/Navbar';

import Footer from '../Components/Footer';
import ServiceHeroSection from '../Components/Service1/ServiceHeroSection';
import ServiceExpert from '../Components/Service1/ServiceExpert';
import JobSteps from '../Components/Service1/JobSteps';
import JobWeOffer from '../Components/Service1/JobWeOffer';
import ServiceHire from '../Components/Service1/ServiceHire';
import WhyHireService from '../Components/Service1/WhyHireService';
import ServiceFaq from '../Components/Service1/ServiceFaq';


const ServicePage1 = () => {
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

export default ServicePage1;