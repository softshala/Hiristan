import React from 'react';
import './ServiceHeroSection.css';
import heroImage from '../../assets/images/Servicepage/salesforce.webp'; // Replace with your actual image path

const ServiceHeroSection = () => {
  return (
    <section className="service-hero-section">
      <div className="service-hero-section-content">
        <span className="service-hero-section-label">BEST SERVICES</span>
        <h1 className="service-hero-section-heading">
          Transforming Businesses with <br />
          Data-Driven <span className="service-hero-section-highlight">Marketing Excellence</span>
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
