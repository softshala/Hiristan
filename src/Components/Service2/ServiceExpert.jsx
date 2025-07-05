import React from 'react';
import './ServiceExpert.css';

const experts = [
  {
    id: 1,
    position: 'Salesforce CPQ Specialist',
    initials: 'CS',
    experience: '7 Years Exp.',
    description: 'Expert in configuring complex pricing models and streamlining quote-to-cash processes.',
    skills: ['Salesforce CPQ', 'Pricing Configuration', 'Quote-to-Cash', 'Salesforce Administration'],
  },
  {
    id: 2,
    position: 'Vlocity Developer',
    initials: 'VD',
    experience: '5 Years Exp.',
    description: 'Skilled in building customized solutions with OmniScript and DataRaptor for seamless integrations.',
    skills: ['Vlocity CPQ', 'OmniScript', 'DataRaptor', 'Salesforce Platform'],
  },
  {
    id: 3,
    position: 'Marketing Cloud Consultant',
    initials: 'MC',
    experience: '6 Years Exp.',
    description: 'Specializes in creating automated, personalized marketing campaigns using Journey Builder.',
    skills: ['Salesforce Marketing Cloud', 'Email Studio', 'Journey Builder', 'Automation Studio'],
  },
  {
    id: 4,
    position: 'Health Cloud Specialist',
    initials: 'HC',
    experience: '8 Years Exp.',
    description: 'Experienced in implementing patient-centric solutions with HIPAA-compliant configurations.',
    skills: ['Salesforce Health Cloud', 'Patient Management', 'Care Plan Configuration', 'HIPAA Compliance'],
  },
];

const ServiceExpert = () => {
  return (
    <div className="service-expert-container">
      <div className="service-expert-header">
        <h2 className="service-expert-heading">Access Our Pool of Verified Salesforce Experts <br />Ready to Join Your Team</h2>
        <p className="service-expert-subheading">
          Meet pre-screened Salesforce experts with comprehensive platform knowledge, verified experience, and relevant certifications.
        </p>
      </div>
      <div className="service-expert-grid">
        {experts.map((expert) => (
          <div key={expert.id} className="service-expert-card">
            <div className="service-expert-experience-badge">
              💼  {expert.experience}
            </div>
            <div className="service-expert-top-row">
              <div className="service-expert-initials">{expert.initials}</div>
              <div className="service-expert-details">
                <h3 className="service-expert-position">{expert.position}</h3>
              </div>
            </div>
            <p className="service-expert-description">{expert.description}</p>
            <div className="service-expert-skills">
              {expert.skills.map((skill, idx) => (
                <span key={idx} className="service-expert-skill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceExpert;