import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      title: "Diverse Talent Pool",
      description: "Access skilled professionals across various industries",
      color: "0, 91, 65"
    },
    {
      title: "Secure Payments",
      description: "Safe and reliable payment processing for all projects",
      color: "0, 129, 112"
    },
    {
      title: "Project Management",
      description: "Powerful tools to manage your projects effectively",
      color: "35, 45, 63"
    },
    {
      title: "Quality Assurance",
      description: "Verified professionals and satisfaction guarantee",
      color: "0, 91, 65"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      color: "0, 129, 112"
    }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="animated-text-container">
            <h1 className="animated-text">Connect with Top Freelance Talent</h1>
          </div>
          <p>Find the perfect freelancer for your next project or explore opportunities as a professional</p>
          <div className="hero-buttons">
            <Link to="/login" className="hero-btn primary">Get Started</Link>
            <Link to="/browse" className="hero-btn secondary">Browse Projects</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose ProConnect?</h2>
        <div className="features-grid">
          <div className="wrapper">
            <div className="inner">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="feature-card"
                  style={{"--index": index, "--color-card": feature.color}}
                >
                  <div className="card-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
