import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import logo1 from '../../assets/images/Homepage/logo1.svg';
import logo2 from '../../assets/images/Homepage/logo1.svg';
import logo3 from '../../assets/images/Homepage/logo1.svg';
import logo4 from '../../assets/images/Homepage/logo1.svg';
import logo5 from '../../assets/images/Homepage/logo1.svg';

function HeroSection() {
  return (
    <>
      <main className="hero-section-main-content">
        <div className="hero-section-text-section">
          <h1 className="hero-section-text-section-head">
            Skip the Hiring Headaches. Get Verified,{' '}
            <span className="hero-section-highlight">Accountable</span>{' '}
            <span className="hero-section-highlight">Tech </span><span className="hero-section-highlight">Professionals</span> Ready to Deliver.
          </h1>
          <p className="hero-section-text-section-desc">
            Tired of missed deadlines, unqualified candidates, and accountability gaps? Hiristan connects global businesses with rigorously tested tech professionals across Salesforce, AWS, Azure, ServiceNow, and more. Our verified profiles, transparent processes, and strict SLA adherence ensure you get experienced professionals who deliver results—promised.
          </p>
          
          <div className="hero-section-features">
            <div className="hero-section-feature-item">
              <span className="hero-section-check-icon">✔</span>
              <p className='hero-section-flex-item'>Flexible engagement models </p>
            </div>
            <div className="hero-section-feature-item">
              <span className="hero-section-check-icon">✔</span>
              <p className='hero-section-flex-item'>Rigorous 3-stage vetting process</p>
            </div>
            <div className="hero-section-feature-item">
              <span className="hero-section-check-icon">✔</span>
              <p className='hero-section-flex-item'>Quick onboarding and integration </p>
            </div>
            <div className="hero-section-feature-item">
              <span className="hero-section-check-icon">✔</span>
              <p className='hero-section-flex-item'>Verified profiles across project history, portfolio, and certifications</p>
            </div>
          </div>
          <Link to="/contact">
            <button className="hero-section-button">Find Your Team</button>
          </Link>
        </div>
        <div className="hero-section-image-section">
          <div className="hero-section-image-shape hero-section-image-1"></div>
        </div>
      </main>
    </>
  );
}

export default HeroSection;