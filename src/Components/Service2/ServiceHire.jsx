import React from 'react';
import './ServiceHire.css';

const serviceHireItems = [
  {
    number: '01',
    title: 'Sales Cloud',
    description:
      'Optimize revenue pipelines with lead management, opportunity tracking, and automated sales workflows.',
  },
  {
    number: '02',
    title: "Service Cloud",
    description:
      "Enhance customer support through case management, omnichannel routing, and AI-powered service automation.",
  },
  {
    number: '03',
    title: 'Marketing Cloud',
    description:
      'Execute targeted campaigns with email automation, customer journey mapping, and personalization strategies.',
  },
  {
    number: '04',
    title: 'Commerce Cloud',
    description:
      'Build scalable e-commerce experiences with storefront customization, order management, and payment integrations.',
  },
  {
    number: '05',
    title: 'Revenue Cloud',
    description:
      'Streamline quote-to-cash processes with CPQ configuration, subscription billing, and revenue recognition automation.',
  },
  {
    number: '06',
    title: 'Salesforce Industries (Vlocity)',
    description:
      'Deploy industry-specific solutions for healthcare, financial services, communications, and utilities accelerators.',
  },
  {
    number: '07',
    title: 'Experience Cloud',
    description:
      'Create branded digital experiences with community portals, partner channels, and customer self-service.',
  },
  {
    number: '08',
    title: 'Agentforce',
    description:
      'Implement AI-powered autonomous agents for customer service, sales support, and workflow orchestration.',
  },
  {
    number: '09',
    title: 'Data Cloud',
    description:
      'Unify customer data with real-time integration, identity resolution, and AI-driven insights.',
  },
    {
    number: '10',
    title: 'Salesforce Platform',
    description:
      'Develop custom applications with Apex, Lightning components, Flow automation, and system integrations.',
  },
    {
    number: '11',
    title: 'Tableau',
    description:
      'Transform data into actionable insights with advanced analytics, interactive dashboards, and business intelligence.',
  },
    {
    number: '12',
    title: 'MuleSoft',
    description:
      'Connect systems seamlessly with API management, data integration, and real-time synchronization solutions.',
  },
];

const ServiceHire = () => {
  return (
    <section className="service-hire-section">
      <div className="service-hire-container">
        <div className="service-hire-header-row">
          <h2 className="service-hire-heading">
            Salesforce Experts Skilled Across All Platform  <br />Products and Solutions
          </h2>
          
        </div>

        <div className="service-hire-grid">
          {serviceHireItems.map((item, index) => (
            <div key={index} className="service-hire-card">
              <div className="service-hire-number">{item.number}</div>
              <h3 className="service-hire-title">{item.title}</h3>
              <p className="service-hire-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHire;
