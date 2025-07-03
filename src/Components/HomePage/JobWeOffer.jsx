import React from 'react';
import './JobWeOffer.css';
import { FaLaptopCode, FaCode, FaDatabase, FaRobot, FaMobileAlt, FaPalette } from 'react-icons/fa';

const jobRoles = [
  {
    icon: <FaLaptopCode />,
    title: 'Salesforce',
    description: 'Custom CRM development, automation workflows, integrations, and Lightning platform solutions.',
  },
  {
    icon: <FaCode />,
    title: 'ServiceNow',
    description: 'IT service management, workflow automation, custom applications, and enterprise integrations.',
  },
  {
    icon: <FaDatabase />,
    title: 'Amazon Web Services (AWS)',
    description: 'Cloud infrastructure, serverless architecture, DevOps automation, and scalable application deployment.',
  },
  {
    icon: <FaRobot />,
    title: 'Google Cloud Platform (GCP)',
    description: 'Machine learning solutions, data analytics, cloud migration, and enterprise application development.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Microsoft Azure ',
    description: 'Cloud computing services, enterprise integration, AI solutions, and hybrid infrastructure management.',
  },
  {
    icon: <FaPalette />,
    title: 'HubSpot',
    description: 'Marketing automation, CRM customization, sales pipeline optimization, and customer engagement solutions.',
  },
];

const JobWeOffer = () => {
  return (
    <section className="job-we-offer-section">
      <div className="job-we-offer-container">
        <h2 className="job-we-offer-heading">Our Core Technology Expertise</h2>
        
        <div className="job-we-offer-grid">
          {jobRoles.map((role, index) => (
            <div className="job-we-offer-card" key={index}>
              <div className="job-we-offer-icon">{role.icon}</div>
              <h3 className="job-we-offer-title">{role.title}</h3>
              <p className="job-we-offer-description">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobWeOffer;
