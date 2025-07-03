import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../assets/images/Homepage/HIRISTAN.svg'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Hiristhan Logo" className="navbar-logo-img" />
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="navbar-items">
          <li className="navbar-item">Services</li>
          <li className="navbar-item">Pricing</li>
          <li className="navbar-item">Jobs</li>
        </ul>
        <div className="navbar-action">
          <button className="start-hiring-btn">Start Hiring</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;