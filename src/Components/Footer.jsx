import React from 'react';
import './footer.css';
import BrandImage from '../assets/images/Homepage/HIRISTAN.svg'; // Adjust path to your image

const Footer = () => {
  return (
    <footer className="footer">
      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <i className="fab fa-twitter"></i>
        </a>
      </div>

      {/* Navigation Links */}
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#projects" className="footer-link">Projects</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#contact" className="footer-link">Contact</a>
          <a href="#blog" className="footer-link">Blog</a>
        </nav>
      </div>

      {/* Background Image and Button */}
      <div className="footer-background-wrapper">
        <img src={BrandImage} alt="Hiristhan" className="footer-background-image" />
      </div>
    </footer>
  );
};

export default Footer;
