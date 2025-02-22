import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FreelancerOnboarding.css';

const FreelancerOnboarding = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    location: '',
    bio: '',
    hourlyRate: '',
    yearsOfExperience: '',
    skills: '',
    portfolioLinks: '',
    education: '',
    certifications: '',
    languages: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to backend
      const response = await fetch('http://localhost:8080/api/freelancers/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create profile');
      }
  
      // Store the profile data locally
      localStorage.setItem('freelancerProfile', JSON.stringify(formData));
      
      // Navigate to dashboard
      navigate('/freelancerdashboard');
    } catch (error) {
      console.error('Error creating profile:', error);
      // Handle error (you might want to show an error message to the user)
    }
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-card">
        <div className="onboarding-header">
          <h1>Complete Your Freelancer Profile</h1>
          <p>Tell us about yourself and your professional experience</p>
        </div>

        <form onSubmit={handleSubmit} className="onboarding-form">
          {/* Personal Information Section */}
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="title">Professional Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="e.g. Senior Web Developer"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Professional Bio</label>
              <textarea
                id="bio"
                name="bio"
                placeholder="Tell clients about yourself and your expertise..."
                value={formData.bio}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Professional Details Section */}
          <div className="form-section">
            <h2>Professional Details</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="hourlyRate">Hourly Rate ($)</label>
                <input
                  type="number"
                  id="hourlyRate"
                  name="hourlyRate"
                  min="1"
                  value={formData.hourlyRate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="yearsOfExperience">Years of Experience</label>
                <input
                  type="number"
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  min="0"
                  value={formData.yearsOfExperience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="form-section">
            <h2>Skills & Expertise</h2>
            <div className="form-group">
              <label htmlFor="skills">Skills (comma-separated)</label>
              <textarea
                id="skills"
                name="skills"
                placeholder="e.g. React, Node.js, Python, UI/UX Design"
                value={formData.skills}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="form-section">
            <h2>Portfolio</h2>
            <div className="form-group">
              <label htmlFor="portfolioLinks">Portfolio Links (one per line)</label>
              <textarea
                id="portfolioLinks"
                name="portfolioLinks"
                placeholder="Add links to your projects or portfolio websites..."
                value={formData.portfolioLinks}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="form-section">
            <h2>Additional Information</h2>
            <div className="form-group">
              <label htmlFor="education">Education</label>
              <input
                type="text"
                id="education"
                name="education"
                placeholder="Highest degree or relevant education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="certifications">Certifications</label>
              <input
                type="text"
                id="certifications"
                name="certifications"
                placeholder="Relevant certifications"
                value={formData.certifications}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="languages">Languages</label>
              <input
                type="text"
                id="languages"
                name="languages"
                placeholder="Languages you speak"
                value={formData.languages}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Complete Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default FreelancerOnboarding;