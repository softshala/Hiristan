import React, { useState } from 'react';
import './JobPage.css';

const JobPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="job-container">
      <div className="job-header">
        <h1 className="job-title">Join Our Team</h1>
        <p className="job-subtitle">Scan the QR code or click below to apply instantly!</p>
      </div>

      <div className="job-qr-section" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className={`job-qr-frame ${isHovered ? 'qr-hovered' : ''}`}>
          <img
            className="job-qr-image"
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://qrfy.io/r/GNAfmGaeXx"
            alt="QR Code to Apply"
          />
          <div className="qr-overlay">
            <span className="qr-prompt">Scan to Apply</span>
          </div>
        </div>
        <button
          className="job-qr-button"
          onClick={() => window.open('https://qrfy.io/r/GNAfmGaeXx', '_blank')}
        >
          Open Application Page
        </button>
      </div>
    </div>
  );
};

export default JobPage;