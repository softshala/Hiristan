import React from 'react';
import './ServiceExpert.css';

const experts = [
  {
    id: 1,
    position: 'ServiceNow ITSM Consultant',
    initials: 'IT',
    experience: '7 Years Exp.',
    description: 'Expert in optimizing IT service management processes with deep ITIL knowledge.',
    skills: ['ServiceNow ITSM', 'Incident Management', 'Service Catalog', 'ITIL Processes'],
  },
  {
    id: 2,
    position: 'ServiceNow Developer',
    initials: 'SD',
    experience: '5 Years Exp.',
    description: 'Skilled in building custom ServiceNow applications and integrations.',
    skills: ['ServiceNow Platform', 'JavaScript', 'Workflow Studio', 'Integration Hub'],
  },
  {
    id: 3,
    position: 'ServiceNow HRSD Specialist',
    initials: 'HR',
    experience: '6 Years Exp.',
    description: 'Specializes in streamlining HR service delivery with employee-focused solutions.',
    skills: ['ServiceNow HRSD', 'Employee Service Center', 'Case Management', 'HR Automation'],
  },
  {
    id: 4,
    position: 'ServiceNow GRC Consultant',
    initials: 'GC',
    experience: '8 Years Exp.',
    description: 'Experienced in implementing governance, risk, and compliance solutions.',
    skills: ['ServiceNow GRC', 'Risk Management', 'Policy Compliance', 'Audit Management'],
  },
];

const ServiceExpert = () => {
  return (
    <div className="service-expert-container">
      <div className="service-expert-header">
        <h2 className="service-expert-heading">Access Our Pool of Verified ServiceNow Experts <br />Ready to Join Your Team</h2>
        <p className="service-expert-subheading">
          Meet pre-screened ServiceNow experts with comprehensive platform knowledge, verified experience, and relevant certifications.
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