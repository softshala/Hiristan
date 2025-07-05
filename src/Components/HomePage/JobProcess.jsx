import React, { useState } from 'react';
import './JobProcess.css';
import processImage1 from '../../assets/images/Homepage/internal.jpg';
import processImage2 from '../../assets/images/Homepage/real.jpg'; 
import processImage3 from '../../assets/images/Homepage/legal.jpg'; 
import processImage4 from '../../assets/images/Homepage/internal.jpg'; 

const jobItems = [
  { number: '01', title: 'Internal Preliminary Assessment', description: 'Comprehensive evaluation combining HR-led soft skills assessment and technical lead evaluation. We verify prior experience, analyze customer satisfaction scores by assessing successful project delivery history to ensure candidates meet our foundational standards.' },
  { number: '02', title: 'Real-Time Skill Assessment', description: 'Candidates complete a practical 10-15 hour trial project demonstrating their technical proficiency and problem-solving abilities. This hands-on evaluation validates their expertise and confirms their ability to meet our rigorous quality standards.' },
  { number: '03', title: 'Legal Formalities & Onboarding', description: 'The final stage involves comprehensive legal documentation, including NDAs, security compliance agreements, and employment contracts. We ensure every resource is legally committed to maintaining our strict security standards and client obligations.' },
];

const JobProcess = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [imageSrc, setImageSrc] = useState(processImage1);

  const handleHover = (item) => {
    setHoveredItem(item);
    switch (item.title) {
      case 'Internal Preliminary Assessment':
        setImageSrc(processImage2);
        break;
      case 'Real-Time Skill Assessment':
        setImageSrc(processImage3);
        break;
      case 'Legal Formalities & Onboarding':
        setImageSrc(processImage4);
        break;
      default:
        setImageSrc(processImage1);
    }
  };

  return (
    <section className="job-process">
      <div className="job-process-header">
        <h1 className="job-process-title-head">Proven Vetting That Guarantees Quality</h1>
      </div>
      <div className="job-process-content">
        <div className="job-process-left">
          <div className="job-process-list">
            {jobItems.map((item, index) => (
              <div
                className="job-process-item"
                key={index}
                onMouseEnter={() => handleHover(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span className="job-process-number">{item.number}</span>
                <div className="job-process-text-container">
                  <span className="job-process-title">{item.title}</span>
                  {hoveredItem && hoveredItem.title === item.title && (
                    <span className="job-process-description">{item.description}</span>
                  )}
                </div>
                <span className="job-process-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
        <div className="job-process-right">
          <img
            src={imageSrc}
            alt="Process visual"
            className="job-process-image"
          />
        </div>
      </div>
    </section>
  );
};

export default JobProcess;