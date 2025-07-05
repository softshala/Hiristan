import React from 'react';
import './JobWeOffer.css';
import { FaLaptopCode, FaCode, FaDatabase, FaRobot, FaMobileAlt, FaPalette } from 'react-icons/fa';

const jobRoles = [
  {
    icon: <FaLaptopCode />,
    title: 'Salesforce Consultant ',
    description: 'Provides strategic guidance on platform optimization, business process alignment, and solution architecture. Analyzes requirements, defines implementation roadmaps, ensures best practices adoption, and maximizes ROI through comprehensive change management and stakeholder engagement strategies.',
  },
  {
    icon: <FaCode />,
    title: 'Salesforce Developer',
    description: 'Expert in Apex programming, Lightning components, and custom application development. Builds complex integrations using REST/SOAP APIs, develops triggers, workflows, and custom objects. Specializes in platform customization, third-party system connections, and scalable code architecture.',
  },
  {
    icon: <FaDatabase />,
    title: 'Salesforce Administrator',
    description: 'Manages platform configuration, user management, security settings, and system maintenance. Handles data imports, field configurations, workflow automation, reports, dashboards, and ensures optimal system performance through monitoring, troubleshooting, and regular health checks.',
  },
  {
    icon: <FaRobot />,
    title: 'Salesforce Architect',
    description: 'Designs enterprise-level solutions with technical architecture, integration patterns, and scalability frameworks. Defines data models, security architecture, and system interfaces. Leads complex implementations, ensuring governance, compliance, and long-term platform sustainability across multiple business units.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Salesforce Designer',
    description: 'Creates intuitive user experiences through Lightning design systems, custom page layouts, and user interface optimization. Focuses on user adoption, mobile responsiveness, and accessibility standards while maintaining brand consistency and improving user engagement metrics.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Salesforce Quality Analyst',
    description: 'Executes comprehensive testing strategies including functional, integration, and performance testing across all Salesforce clouds. Develops test cases, validates configurations, ensures data integrity, and maintains quality standards throughout development and deployment cycles. ',
  },
  
];

const JobWeOffer = () => {
  return (
    <section className="job-we-offer-section">
      <div className="job-we-offer-container">
        <h2 className="job-we-offer-heading">Salesforce Experts By Role</h2>
        
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
