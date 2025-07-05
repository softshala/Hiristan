import React from 'react';
import './JobWeOffer.css';
import SalesforceIcon from '../../assets/images/Homepage/Salesforce.webp';
import ServiceNowIcon from '../../assets/images/Homepage/ServiceNow.png';
import AWSIcon from '../../assets/images/Homepage/AWS.png';
import GCPIcon from '../../assets/images/Homepage/GCP.webp';
import AzureIcon from '../../assets/images/Homepage/Azure.png';
import HubSpotIcon from '../../assets/images/Homepage/HubSpot.png';

const jobRoles = [
  {
    icon: <img src={SalesforceIcon} alt="Salesforce Icon" className="job-we-offer-icon-img" />,
    title: 'Salesforce',
    description: 'Custom CRM development, automation workflows, integrations, and Lightning platform solutions.',
  },
  {
    icon: <img src={ServiceNowIcon} alt="ServiceNow Icon" className="job-we-offer-icon-img" />,
    title: 'ServiceNow',
    description: 'IT service management, workflow automation, custom applications, and enterprise integrations.',
  },
  {
    icon: <img src={AWSIcon} alt="AWS Icon" className="job-we-offer-icon-img" />,
    title: 'Amazon Web Services (AWS)',
    description: 'Cloud infrastructure, serverless architecture, DevOps automation, and scalable application deployment.',
  },
  {
    icon: <img src={GCPIcon} alt="GCP Icon" className="job-we-offer-icon-img" />,
    title: 'Google Cloud Platform (GCP)',
    description: 'Machine learning solutions, data analytics, cloud migration, and enterprise application development.',
  },
  {
    icon: <img src={AzureIcon} alt="Azure Icon" className="job-we-offer-icon-img" />,
    title: 'Microsoft Azure ',
    description: 'Cloud computing services, enterprise integration, AI solutions, and hybrid infrastructure management.',
  },
  {
    icon: <img src={HubSpotIcon} alt="HubSpot Icon" className="job-we-offer-icon-img" />,
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