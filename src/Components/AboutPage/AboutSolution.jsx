import React from 'react';
import './AboutSolution.css';

const AboutSolution = () => {
  return (
    <section className="aboutsolution-section">
      <div className="aboutsolution-container">
        <h2 className="aboutsolution-title">
          The Problems <span>We're Solving</span>
        </h2>

        <div className="aboutsolution-grid">
          <div className="aboutsolution-card">
            <div className="aboutsolution-heading">
              🎯 <span>Global Businesses Face</span>
            </div>
            <ul className="aboutsolution-list">
              <li>
                <span className="aboutsolution-dot" /> 
                <div>
                  <strong>Talent Scarcity</strong><br />
                  Difficulty finding skilled developers with proven expertise
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" /> 
                <div>
                  <strong>Accountability Gaps</strong><br />
                  Lack of reliable performance metrics and commitment assurance
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Quality Concerns</strong><br />
                  Inconsistent skill levels and project delivery standards
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Transparency Issues</strong><br />
                  Limited visibility into candidate backgrounds and capabilities
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Onboarding Delays</strong><br />
                  Lengthy recruitment cycles affecting project timelines
                </div>
              </li>
            </ul>
          </div>

          <div className="aboutsolution-card">
            <div className="aboutsolution-heading">
              👥 <span>Skilled Professionals Struggle With</span>
            </div>
            <ul className="aboutsolution-list">
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Limited Access</strong><br />
                  To high-quality international projects
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Inadequate Compensation</strong><br />
                  Compared to global standards
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Career Advancement</strong><br />
                  Lack of growth opportunities
                </div>
              </li>
              <li>
                <span className="aboutsolution-dot" />
                <div>
                  <strong>Technology Exposure</strong><br />
                  Insufficient access to cutting-edge technologies
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSolution;
