import React from 'react';
import './AboutStory.css';
import storyImage from '../../assets/images/Homepage/story.png'; // replace with your image path

const AboutStory = () => {
  return (
    <section className="Aboutstory-section">
      <div className="Aboutstory-container">
        <div className="Aboutstory-image">
          <img src={storyImage} alt="Our Story" />
        </div>
        <div className="Aboutstory-content">
          <h2 className="Aboutstory-heading">
            Our Story
          </h2>
          <div className="Aboutstory-description">
            <p className="Aboutstory-subheading">
              A talented software architect in Bangalore dreams of working on cutting-edge AI projects.
              A skilled cloud engineer in Lagos wants to contribute to enterprise-scale solutions.
              A certified developer in Kyiv seeks opportunities that match their expertise. Today, they
              believe the only path to these opportunities is a one-way ticket abroad.
            </p>
            <p className="Aboutstory-subheading">
              The hidden cost is staggering. Families separated. Cultural roots abandoned. Local
              innovation ecosystems are depleted. Communities are losing their brightest minds to
              distant shores. Meanwhile, on the other side of the globe, businesses are struggling with
              their challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;