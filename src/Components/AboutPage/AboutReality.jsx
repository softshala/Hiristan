import React from 'react';
import './AboutReality.css';

const AboutReality = () => {
  return (
    <section className="aboutreality-section">
      <div className="aboutreality-container">
        <h2 className="aboutreality-title">The Painful Reality</h2>

        <div className="aboutreality-cards">
          <div className="aboutreality-card">
            <div className="aboutreality-icon">🏢</div>
            <h3 className="aboutreality-company">Fortune 500 Company</h3>
            <p className="aboutreality-desc">
              Spends six months searching for a Salesforce architect, only to settle for an overpriced consultant
            </p>
          </div>

          <div className="aboutreality-card">
            <div className="aboutreality-icon">⚡</div>
            <h3 className="aboutreality-company">London Fintech</h3>
            <p className="aboutreality-desc">
              Delays AWS migration because it can't find verified cloud engineers
            </p>
          </div>

          <div className="aboutreality-card">
            <div className="aboutreality-icon">🎯</div>
            <h3 className="aboutreality-company">Toronto Enterprise</h3>
            <p className="aboutreality-desc">
              Abandons ServiceNow implementation due to resource constraints
            </p>
          </div>
        </div>

        <p className="aboutreality-footer">
          <strong>
            The irony is painful: While brilliant tech talent worldwide dreams of working on these exact projects, businesses can't connect with them effectively.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default AboutReality;
