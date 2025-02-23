import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    // Get URL parameters
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
    const email = params.get('email');
    const userType = params.get('userType');

    // You can use these values as needed
    console.log('User details:', { name, email, userType });
  }, [location]);


  const handleUserSelection = () => {
    navigate('/loginclient' );
  };

  const handleFreelancerSelection = () => {
    navigate('/loginfreelancer' );
  };

  return (
    <div className="role-selection-container">
      <div className="role-cards-container">
        {/* User Card */}
        <div className="role-card user-card" onClick={handleUserSelection}>
          <div className="icon-container user-icon-container">
            <svg className="role-icon" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <h2 className="role-title">Client</h2>
          <p className="role-description">
            Find and hire talented freelancers for your projects
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <span className="feature-dot user-dot"></span>
              <span>Post projects and job opportunities</span>
            </li>
            <li className="feature-item">
              <span className="feature-dot user-dot"></span>
              <span>Browse and hire freelancers</span>
            </li>
            <li className="feature-item">
              <span className="feature-dot user-dot"></span>
              <span>Manage projects and payments</span>
            </li>
          </ul>
          <button className="cta-button user-cta">Get Started</button>
        </div>

        {/* Freelancer Card */}
        <div className="role-card freelancer-card" onClick={handleFreelancerSelection}>
          <div className="icon-container freelancer-icon-container">
            <svg className="role-icon" viewBox="0 0 24 24" fill="none" stroke="#FBBC05" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
          <h2 className="role-title">Freelancer</h2>
          <p className="role-description">
            Find projects and showcase your skills to potential clients
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <span className="feature-dot freelancer-dot"></span>
              <span>Create your professional profile</span>
            </li>
            <li className="feature-item">
              <span className="feature-dot freelancer-dot"></span>
              <span>Browse available projects</span>
            </li>
            <li className="feature-item">
              <span className="feature-dot freelancer-dot"></span>
              <span>Submit proposals and get hired</span>
            </li>
          </ul>
          <button className="cta-button freelancer-cta">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;