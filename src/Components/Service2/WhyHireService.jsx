import React from 'react';
import './WhyHireService.css';
import { FaCheck } from 'react-icons/fa';
import teamImage from '../../assets/images/Servicepage/sales.png'; // Replace with your actual image path

const features = [
  {
    title: 'Certified Salesforce Specialists',
    description:
      'Verified experts with active certifications across Sales Cloud, Service Cloud, and specialized platforms.',
  },
  {
    title: 'Cross-Industry Experience',
    description:
      'Proven success across healthcare, finance, manufacturing, retail, and non-profit sector implementations',
  },
  {
    title: 'Agile Methodology ',
    description:
      'An iterative development approach with regular client feedback loops and rapid deployment capabilities.',
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
          <h2 className="why-hire-service-title">Why Choose Hiristan for Salesforce Experts Staffing?</h2>
          <p className="why-hire-service-description">
            Leverage the capabilities of the Salesforce platform with our rigorously vetted professionals who deliver accountability-driven results across all engagement models.
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
