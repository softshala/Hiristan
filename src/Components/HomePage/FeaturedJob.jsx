import React from 'react';
import './FeaturedJob.css';
import maskedImage from '../../assets/images/Homepage/job1.webp';
import logo2 from '../../assets/images/Homepage/job1.webp';
import logo3 from '../../assets/images/Homepage/job1.webp';
import logo4 from '../../assets/images/Homepage/job1.webp';

function FeaturedJob() {
  return (
    <section className="featured-job-section">
      <h2 className="featured-job-title">Available Pre-Vetted Professionals</h2>
      <p className="featured-job-description">
        Explore verified profiles of skilled tech professionals ready for immediate deployment.
      </p>
      <div className="featured-job-grid">
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={maskedImage} alt="Company Logo 1" className="featured-job-logo" />
          <h3 className="featured-job-position">Jr. PHP Developer</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={logo2} alt="Company Logo 2" className="featured-job-logo" />
          <h3 className="featured-job-position">Exp. Project Manager</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={logo3} alt="Company Logo 3" className="featured-job-logo" />
          <h3 className="featured-job-position">Sr. WordPress Developer</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={logo4} alt="Company Logo 4" className="featured-job-logo" />
          <h3 className="featured-job-position">Jr. Laravel Developer</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={maskedImage} alt="Company Logo 1" className="featured-job-logo" />
          <h3 className="featured-job-position">Jr. PHP Developer</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={logo2} alt="Company Logo 2" className="featured-job-logo" />
          <h3 className="featured-job-position">Exp. Project Manager</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={logo3} alt="Company Logo 3" className="featured-job-logo" />
          <h3 className="featured-job-position">Sr. WordPress Developer</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
        <div className="featured-job-card">
          <span className="featured-job-label featured-job-available">Available</span>
          <span className="featured-job-label featured-job-urgent">Urgent</span>
          <img src={logo4} alt="Company Logo 4" className="featured-job-logo" />
          <h3 className="featured-job-position">Jr. Laravel Developer</h3>
          <p className="featured-job-skills">CSS3, HTML5, JavaScript, Bootstrap, jQuery</p>
          <button className="featured-job-details">Details</button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedJob;