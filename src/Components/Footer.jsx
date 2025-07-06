import React from 'react';
import './footer.css';
import BrandImage from '../assets/images/Homepage/HIRISTAN.svg'; 

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="https://www.instagram.com/hiristan_?igsh=bDRzbWRtdmdxNXVl" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/hiristan/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="/about" className="footer-link">About</a>
          <a href="/hire-salesforce-professionals" className="footer-link">Salesforce</a>
          <a href="/hire-servicenow-professionals" className="footer-link">ServiceNow</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/terms-and-condition" className="footer-link">Terms and Conditions</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </nav>
      </div>

      {/* Background Image */}
      <div className="footer-background-wrapper">
        <img src={BrandImage} alt="Hiristhan" className="footer-background-image" />
      </div>
    </footer>
  );
};

export default Footer;