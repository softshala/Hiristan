import React from 'react';
import './ServiceHire.css';

const serviceHireItems = [
  {
    number: '01',
    title: 'ITSM (IT Service Management)',
    description:
      'Streamline IT operations with incident management, service requests, and workflow automation solutions.',
  },
  {
    number: '02',
    title: "ITOM (IT Operations Management)",
    description:
      "Optimize infrastructure performance through discovery, monitoring, orchestration, and automated remediation capabilities.",
  },
  {
    number: '03',
    title: 'ITAM (IT Asset Management)',
    description:
      'Manage complete asset life cycles with procurement, deployment, maintenance, and disposal optimization.',
  },
  {
    number: '04',
    title: 'CSM (Customer Service Management)',
    description:
      'Enhance customer experiences through case management, knowledge base, and omnichannel support solutions.',
  },
   {
    number: '05',
    title: 'FSM (Field Service Management)',
    description:
      'Coordinate field operations with scheduling, dispatching, mobile workforce, and resource optimization tools.',
  },
   {
    number: '06',
    title: 'SPM (Strategic Portfolio Management)',
    description:
      'Align business strategy with project portfolios, resource allocation, and investment decision optimization.',
  },
   {
    number: '07',
    title: 'SecOps (Security Operations)',
    description:
      'Strengthen security posture through threat detection, incident response, and vulnerability management automation.',
  },
   {
    number: '08',
    title: 'GRC (Governance, Risk, and Compliance)',
    description:
      'Ensure regulatory compliance through risk assessment, audit management, and governance framework automation.',
  },
   {
    number: '09',
    title: 'AI Platform',
    description:
      'Leverage intelligent automation with machine learning, predictive analytics, and AI-powered workflow optimization.',
  },
];

const ServiceHire = () => {
  return (
    <section className="service-hire-section">
      <div className="service-hire-container">
        <div className="service-hire-header-row">
          <h2 className="service-hire-heading">
            ServiceNow Professionals Skilled Across All Platform
  <br /> Modules and Applications
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
