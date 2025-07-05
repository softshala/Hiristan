import React from 'react';
import { Link } from 'react-router-dom';
import './JobSteps.css';

const steps = [
  {
    id: 1,
    title: 'DISCOVER & ANALYZE',
    description:
      "We execute comprehensive requirement analysis sessions, dissecting your project architecture, technical specifications, team culture, and performance expectations to ensure precise talent alignment.",
  },
  {
    id: 2,
    title: "MATCH & VALIDATE",
    description:
      'Our expert talent strategists leverage advanced matching algorithms and our elite pre-vetted developer network to identify, validate, and present candidates with verified expertise and exceptional performance records.',
  },
  {
    id: 3,
    title: 'DEPLOY & INTEGRATE',
    description:
      'We orchestrate rapid onboarding through streamlined legal processes, security protocols, and technical integration. Your handpicked professionals become productive team members within 48 hours, guaranteed.',
  },
];

const JobSteps = () => {
  return (
    <section className="job-steps">
      <div className="job-steps-container">
        <div className="job-steps-intro">
          <p className="job-steps-subtitle">HOW IT WORKS</p>
          <h2 className="job-steps-title">Your Pathway to Elite Tech Talent</h2>
          <p className="job-steps-text">
           Our systematic approach transforms your hiring challenges into strategic advantages through precision matching and rapid deployment of elite technical professionals.
          </p>
          <Link to="/contact">
            <button className="job-steps-button">Get Started</button>
          </Link>
        </div>

        <div className="job-steps-timeline">
          {steps.map((step, index) => (
            <div key={step.id} className={`job-steps-item job-steps-item-${index + 1}`}>
              <div className="job-steps-bg-number">{step.id}</div>
              <div className="job-steps-info">
                <h4 className="job-steps-step-title">{step.title}</h4>
                <p className="job-steps-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobSteps;