import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>ProConnect</h3>
          <p>Connecting talent with opportunity</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/careers">Careers</Link>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <Link to="/blog">Blog</Link>
            <Link to="/help">Help Center</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 ProConnect. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;