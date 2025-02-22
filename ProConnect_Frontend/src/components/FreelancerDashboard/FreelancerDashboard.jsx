import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FreelancerDashboard.css';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  Languages, 
  Link as LinkIcon,
  GraduationCap  // Changed from GraduateCap to GraduationCap
} from 'lucide-react';

const FreelancerDashboard = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const storedProfile = localStorage.getItem('freelancerProfile');
        if (storedProfile) {
          const profileData = JSON.parse(storedProfile);
          const response = await fetch('http://localhost:8080/api/freelancers/name/' + profileData.fullName);
          const data = await response.json();
          setProfile(data[0]);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div className="loading-container">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{profile.fullName}</h1>
        <div className="location-info">
          <MapPin size={16} />
          <span>{profile.location}</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="main-content">
          <div className="card">
            <div className="card-header">
              <h2>Professional Info</h2>
            </div>
            <div className="card-content">
              <div className="info-item">
                <Briefcase />
                <div>
                  <h3>{profile.title}</h3>
                  <p>${profile.hourlyRate}/hour</p>
                </div>
              </div>
              <div className="info-item">
                <Clock />
                <p>{profile.yearsOfExperience} years of experience</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>About Me</h2>
            </div>
            <div className="card-content">
              <p>{profile.bio}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Skills</h2>
            </div>
            <div className="card-content">
              <div className="skills-container">
                {profile.skills.split(',').map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="card job-search-card">
            <h2>Find Your Next Project</h2>
            <p>Browse through hundreds of projects matching your skills</p>
            <button 
              className="job-search-button"
              onClick={() => navigate('/jobs')}
            >
              Browse Projects
            </button>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Education & Certifications</h2>
            </div>
            <div className="card-content">
              <div className="info-item">
                <GraduationCap />  {/* Changed from GraduateCap to GraduationCap */}
                <div>
                  <h3>Education</h3>
                  <p>{profile.education}</p>
                </div>
              </div>
              <div className="info-item">
                <Award />
                <div>
                  <h3>Certifications</h3>
                  <p>{profile.certifications}</p>
                </div>
              </div>
              <div className="info-item">
                <Languages />
                <div>
                  <h3>Languages</h3>
                  <p>{profile.languages}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h2>Portfolio</h2>
            </div>
            <div className="card-content">
              {profile.portfolioLinks.split('\n').map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-link"
                >
                  <LinkIcon size={16} />
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDashboard;