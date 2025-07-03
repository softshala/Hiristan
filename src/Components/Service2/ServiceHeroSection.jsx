import React from 'react';
import './ServiceHeroSection.css';
import heroImage from '../../assets/images/Servicepage/salesforce.webp'; // Replace with your actual image path

const ServiceHeroSection = () => {
  return (
    <section className="service-hero-section">
      <div className="service-hero-section-content">
        <span className="service-hero-section-label">BEST SERVICES</span>
        <h1 className="service-hero-section-heading">
          Hire elite Salesforce <br />
          developers in <span className="service-hero-section-highlight">24 hours</span>
        </h1>
        <p className="service-hero-section-subtext">
          Our expertise spans across digital strategy, branding, performance marketing, and
          audience engagement, ensuring measurable growth and long-term success.
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
