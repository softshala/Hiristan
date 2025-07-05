import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './JobTalent.css';
import { FaUserClock, FaUserTie, FaBrain } from 'react-icons/fa';

import imageFreelance from '../../assets/images/Homepage/team.jpg';
import imageDirect from '../../assets/images/Homepage/hourly.jpg';
import imageLLM from '../../assets/images/Homepage/managed.jpg';
import delievery from '../../assets/images/Homepage/project.jpg';

const tabs = [
  {
    title: 'Dedicated Teams',
    heading: 'Dedicated Teams',
    description:
      'Exclusive professionals assigned to your project with timezone alignment and language proficiency. Direct reporting eliminates middleman hassles while ensuring complete focus on your objectives.',
    image: imageFreelance,
    icon: <FaUserClock />,
  },
  {
    title: 'Hourly Resources',
    heading: 'Hourly Resources',
    description:
      'Flexible specialists are available for specific hours based on your project needs. Pay only for actual working hours with transparent billing and immediate scalability options.',
    image: imageDirect,
    icon: <FaUserTie />,
  },
  {
    title: 'Managed Services',
    heading: 'Managed Services',
    description:
      "Strategic partnership, managing your technology investments alongside your internal team. We optimize ROI, ensure operational continuity, and maintain peak system performance.",
    image: imageLLM,
    icon: <FaBrain />,
  },
  {
    title: 'Project Delivery',
    heading: 'Project Delivery',
    description:
      "Complete project outsourcing with a dedicated delivery manager, consultants, and technical resources. End-to-end responsibility ensuring maximum value and seamless project execution from concept to completion.",
    image: delievery,
    icon: <FaBrain />,
  },
];

const JobTalent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="job-talent-section">
      <div className="job-talent-container">
        <h2 className="job-talent-heading">
          Choose Your Perfect Partnership Model
        </h2>

        <div className="job-talent-tab-wrapper">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`job-talent-tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="job-talent-content">
          <div className="job-talent-left">
            <div className="job-talent-icon">{tabs[activeTab].icon}</div>
            <h3 className="job-talent-subheading">{tabs[activeTab].heading}</h3>
            <p className="job-talent-description">{tabs[activeTab].description}</p>
            <Link to="/contact" >
              <button className="job-talent-button">Get Started Now</button>
            </Link>
          </div>

          <div className="job-talent-right">
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="job-talent-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobTalent;