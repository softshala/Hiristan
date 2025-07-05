import React from 'react';
import './ServiceHeroSection.css';
import heroImage from '../../assets/images/Servicepage/salesforce.jpg'; // Replace with your actual image path

const ServiceHeroSection = () => {
  return (
    <section className="service-hero-section">
      <div className="service-hero-section-content">
        <span className="service-hero-section-label">BEST SERVICES</span>
        <h1 className="service-hero-section-heading">
          Hire Pre-Vetted Salesforce Experts<br />
          for Seamless <span className="service-hero-section-highlight">CRM Excellence</span>
        </h1>
        <p className="service-hero-section-subtext">
          Access rigorously tested Salesforce experts who deliver accountability-driven results across Sales Cloud, Service Cloud, and platform customizations with complete transparency.
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
