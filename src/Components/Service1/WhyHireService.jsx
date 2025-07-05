import React from 'react';
import './WhyHireService.css';
import { FaCheck } from 'react-icons/fa';
import teamImage from '../../assets/images/Servicepage/servicenow.png'; // Replace with your actual image path

const features = [
  {
    title: 'Verified Experience Portfolios',
    description:
      'Complete background verification with client-accessible documentation of successful ServiceNow projects and certifications.',
  },
  {
    title: 'Flexible Engagement Models',
    description:
      'Dedicated teams, hourly resources, managed services, or full project delivery tailored to your requirements.',
  },
  {
    title: 'Accountability-Driven SLA Framework',
    description:
      'Strict adherence to delivery timelines, availability commitments, and performance standards.',
  },
  
];

const WhyHireService = () => {
  return (
    <section className="why-hire-service-section">
      <div className="why-hire-service-container">
        <div className="why-hire-service-left">
          <div className="why-hire-service-image-wrapper">
            <img src={teamImage} alt="Team discussion" className="why-hire-service-image" />
            <div className="why-hire-service-dot-pattern"></div>
          </div>
        </div>
        <div className="why-hire-service-right">
          <h2 className="why-hire-service-title">Why Choose Hiristan for ServiceNow Professional Staffing?</h2>
          <p className="why-hire-service-description">
            Experience unmatched quality and accountability in ServiceNow talent acquisition with our comprehensive vetting and transparent engagement approach.
          </p>
          <ul className="why-hire-service-features">
            {features.map((feature, index) => (
              <li key={index} className="why-hire-service-feature">
                <div className="why-hire-service-check-icon">
                  <FaCheck />
                </div>
                <div>
                  <strong>{feature.title}</strong>
                  <p>{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyHireService;
