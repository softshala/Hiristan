import React from 'react';
import './JobWeOffer.css';
import { FaLaptopCode, FaCode, FaDatabase, FaRobot, FaMobileAlt, FaPalette } from 'react-icons/fa';

const jobRoles = [
  {
    icon: <FaLaptopCode />,
    title: 'ServiceNow Developer',
    description: 'Expert in JavaScript, Glide API, and ServiceNow scripting. Builds custom applications, workflow automation, integrations with REST/SOAP APIs, and develops complex business rules, UI policies, and client scripts for platform customization.',
  },
  {
    icon: <FaCode />,
    title: 'ServiceNow System Administrator',
    description: 'Specializes in platform configuration, user management, access controls, and system maintenance. Manages instance upgrades, data imports, system properties, and ensures optimal platform performance through monitoring and troubleshooting.',
  },
  {
    icon: <FaDatabase />,
    title: 'ServiceNow Implementation Specialist ',
    description: 'Focuses on end-to-end platform deployment, requirements gathering, solution design, and go-live strategies. Manages data migration, system integration, stakeholder training, and ensures successful platform adoption across organizations.',
  },
  {
    icon: <FaRobot />,
    title: 'ServiceNow Consultant',
    description: 'Provides strategic guidance on platform optimization, best practices, and business process alignment. Analyzes existing workflows, recommends improvements, defines governance frameworks, and ensures maximum ROI from ServiceNow investments.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'ServiceNow Quality Analyst',
    description: 'Executes comprehensive testing strategies including functional, integration, and performance testing. Develops test cases, validates configurations, ensures data integrity, and maintains quality standards throughout development and deployment cycles.',
  },
  
];

const JobWeOffer = () => {
  return (
    <section className="job-we-offer-section">
      <div className="job-we-offer-container">
        <h2 className="job-we-offer-heading">ServiceNow Specialists by Role</h2>
        
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
