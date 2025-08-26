import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceExpert.css';

const ServiceExpert = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <div className="service-expert-container">
      <div className="service-expert-header">
        <h2 className="service-expert-heading">Access Our Pool of Verified Salesforce Experts <br />Ready to Join Your Team</h2>
        <p className="service-expert-subheading">
          Meet pre-screened Salesforce experts with comprehensive platform knowledge, <br />verified experience, and relevant certifications.
        </p>
        <button className="service-expert-contact-button" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServiceExpert;
