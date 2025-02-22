import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="animated-text-container">
            <h1 className="animated-text">Connect with Top Freelance Talent</h1>
          </div>
          <p>Find the perfect freelancer for your next project or explore opportunities as a professional</p>
          <div className="hero-buttons">
            <Link to="/signup" className="hero-btn primary">Get Started</Link>
            <Link to="/browse" className="hero-btn secondary">Browse Projects</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose ProConnect?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Diverse Talent Pool</h3>
            <p>Access skilled professionals across various industries</p>
          </div>
          <div className="feature-card">
            <h3>Secure Payments</h3>
            <p>Safe and reliable payment processing for all projects</p>
          </div>
          <div className="feature-card">
            <h3>Project Management for it</h3>
            <p>Powerful tools to manage your projects effectively</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;