import React from 'react';
import './FeaturedJob.css';

const jobs = [
  {
    position: 'Salesforce CPQ',
    initials: 'SC',
    skills: 'Salesforce CPQ, Pricing Configuration, Quote Management, Apex, Visualforce',
  },
  {
    position: 'Vlocity',
    initials: 'VL',
    skills: 'Vlocity CPQ, OmniScript, DataRaptor, Integration Procedures, Salesforce Platform',
  },
  {
    position: 'Marketing Cloud',
    initials: 'MC',
    skills: 'Salesforce Marketing Cloud, Email Studio, Journey Builder, Automation Studio, AMPscript',
  },
  {
    position: 'Health Cloud',
    initials: 'HC',
    skills: 'Salesforce Health Cloud, Patient Management, Care Plans, EHR Integration, Lightning Components',
  },
  {
    position: 'Financial Service Cloud',
    initials: 'FS',
    skills: 'Salesforce FSC, Wealth Management, Client 360, Financial Data Modeling, Lightning Web Components',
  },
  {
    position: 'ServiceNow ITSM',
    initials: 'SN',
    skills: 'ServiceNow ITSM, Incident Management, Service Catalog, Workflow Automation, ITIL Processes',
  },
  {
    position: 'Salesforce Business Analyst',
    initials: 'SB',
    skills: 'Salesforce Administration, Requirements Gathering, Process Mapping, User Stories, Stakeholder Management',
  },
  {
    position: 'Salesforce CPQ',
    initials: 'SC',
    skills: 'Salesforce CPQ, Pricing Configuration, Quote Management, Apex, Visualforce',
  },
];

function FeaturedJob() {
  return (
    <section className="featured-job-section">
      <h2 className="featured-job-title">Available Pre-Vetted Professionals</h2>
      <p className="featured-job-description">
        Explore verified profiles of skilled tech professionals ready for immediate deployment.
      </p>
      <div className="featured-job-grid">
        {jobs.map((job, index) => (
          <div key={index} className="featured-job-card">
            <span className="featured-job-label featured-job-available">Available</span>
            <span className="featured-job-label featured-job-urgent">Urgent</span>
            <div className="featured-job-initials">{job.initials}</div>
            <h3 className="featured-job-position">{job.position}</h3>
            <p className="featured-job-skills">{job.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedJob;