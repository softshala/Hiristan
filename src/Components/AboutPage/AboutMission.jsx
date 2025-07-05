import React from 'react';
import './AboutMission.css';
import missionImg from '../../assets/images/Homepage/project.jpg'; 

const AboutMission = () => {
  return (
    <section className="aboutmission-section">
      <div className="aboutmission-container">
        <div className="aboutmission-left">
          <img src={missionImg} alt="Dashboard Example" className="aboutmission-image" />
        </div>
        <div className="aboutmission-right">
          <h2 className="aboutmission-heading">
            Our Mission: <br />
            <span>Redefining Global Talent Engagement</span>
          </h2>
          <p className="aboutmission-subtext">
            Hiristan was founded with a singular vision: matching qualified candidates with the right opportunities globally while enabling them to thrive in their home countries.
            <br /><br />
            We're not just another staffing vendor — we're architects of a new paradigm where talent stays local but works globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
