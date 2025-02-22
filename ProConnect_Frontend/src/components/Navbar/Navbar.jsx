import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img src="https://play-lh.googleusercontent.com/n-5ad1uAkRD8H-e4FGa4MJH0Xxgit2I9xE5XcUuw8k8KqLG4xHQn3M_5mtwD2tXTL0A" alt="ProConnect" className="navbar-logo" />
          <span className="navbar-brand-name">ProConnect</span>
        </Link>
        
        <div className="nav-buttons">
          <Link to="/login" className="nav-btn login-btn">Login</Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;