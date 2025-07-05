import React from 'react';
import './ServiceHeroSection.css';
import heroImage from '../../assets/images/Servicepage/service.jpg'; // Replace with your actual image path

const ServiceHeroSection = () => {
  return (
    <section className="service-hero-section">
      <div className="service-hero-section-content">
       
        <h1 className="service-hero-section-heading">
          Hire Pre-Vetted ServiceNow Professionals <br />
          for End-to-End <span className="service-hero-section-highlight">Platform Excellence</span>
        </h1>
        <p className="service-hero-section-subtext">
          Stop struggling with ServiceNow talent gaps. Hire rigorously tested, verified ServiceNow professionals who ensure timely delivery and complete project accountability. 
        </p>
        <div className="service-hero-section-image-wrapper">
          <img
            src={heroImage}
            alt="Marketing Team Collaboration"
            className="service-hero-section-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroSection;
