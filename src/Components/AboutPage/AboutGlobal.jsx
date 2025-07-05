import React from 'react';
import './AboutGlobal.css';

const AboutGlobal = () => {
  return (
    <section className="aboutglobal-section">
      <div className="aboutglobal-container">
        <h2 className="aboutglobal-title">
          Global Organizations are Hitting Roadblocks <br />They Never Anticipated
        </h2>
        <p className="aboutglobal-subtitle">
          Meanwhile, on the other side of the globe, businesses are struggling with their own challenges.
        </p>

        <div className="aboutglobal-grid">
          <div className="aboutglobal-card">
            <div className="aboutglobal-icon red">🕒</div>
            <h3 className="aboutglobal-card-title">Delayed Initiatives</h3>
            <p className="aboutglobal-card-desc">
              Tech initiatives are delayed due to talent shortages in expensive markets. Months-long recruitment cycles that delay critical digital transformations.
            </p>
          </div>

          <div className="aboutglobal-card">
            <div className="aboutglobal-icon orange">💲</div>
            <h3 className="aboutglobal-card-title">Budget Strain</h3>
            <p className="aboutglobal-card-desc">
              Inflated salary expectations that strain project budgets. High turnover rates as local talent jumps between opportunities.
            </p>
          </div>

          <div className="aboutglobal-card">
            <div className="aboutglobal-icon purple">🛡️</div>
            <h3 className="aboutglobal-card-title">Verification Issues</h3>
            <p className="aboutglobal-card-desc">
              Difficulty verifying candidate credentials and real-world experience. Limited access to specialized skills in emerging technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGlobal;
