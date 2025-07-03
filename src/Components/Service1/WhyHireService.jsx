import React from 'react';
import './WhyHireService.css';
import { FaCheck } from 'react-icons/fa';
import teamImage from '../../assets/images/Servicepage/servicenow.png'; // Replace with your actual image path

const features = [
  {
    title: '#1 Quality Job',
    description:
      'Hire from the largest pool of pre-vetted LatAm talent',
  },
  {
    title: 'Top Companies',
    description:
      'Receive a personalized shortlist in just 48 hours',
  },
  {
    title: 'International Jobs',
    description:
      'Receive a personalized shortlist in just 48 hours',
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
          <h2 className="why-hire-service-title">Why hire ServiceNow developers?</h2>
          <p className="why-hire-service-description">
            With Hiristhan, you never have to worry about finding elite Python talent. Our elite developers have at least 5 years of experience and are available on a staffing or long-term basis.
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
