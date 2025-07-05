import React from "react";
import "./AboutHeroSection.css";
import heroImage from "../../assets/images/Homepage/mission.png";

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">
      <div className="about-hero-section-container">
        <div className="about-hero-section-content">
          <h1 className="about-hero-section-heading">
            The Hiristan Movement: Keeping Brilliance at Home
          </h1>
          <p className="about-hero-section-description">
            Every year, thousands of brilliant tech talent from developing
            nations across the globe pack their bags for Silicon Valley, London,
            or Toronto. 
            <br /><br />
            From India's tech hubs to Brazil's innovation centers,
            from Eastern Europe's programming powerhouses to Africa's emerging
            tech talent - the story is the same. 
            <br /><br />
            We call it "brain drain" and
            accept it as inevitable. But what if it doesn't have to be?
          </p>
        </div>
        <div className="about-hero-section-image">
          <img src={heroImage} alt="Architecture View" />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
