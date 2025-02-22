import React, { useState } from 'react';
import './JobListing.css';

const JobListing = () => {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    category: '',
    budget: '',
    skills: []
  });

  // Dummy data - replace with API call
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Needed',
      description: 'Looking for a skilled frontend developer...',
      category: 'Web Development',
      budget: { minimum: 1000, maximum: 2000 },
      skills: ['React', 'JavaScript', 'CSS'],
      deadline: '2024-03-30',
      postedDate: '2024-02-21',
      clientName: 'Tech Corp'
    },
    // Add more dummy jobs
  ];

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  return (
    <div className="job-listing-container">
      <div className="search-section">
        <div className="search-filters">
          <input
            type="text"
            name="keyword"
            className="search-input"
            placeholder="Search jobs..."
            value={searchParams.keyword}
            onChange={handleSearch}
          />
          <select
            name="category"
            className="filter-select"
            value={searchParams.category}
            onChange={handleSearch}
          >
            <option value="">All Categories</option>
            <option value="web">Web Development</option>
            <option value="mobile">Mobile Development</option>
            <option value="design">Design</option>
          </select>
          <select
            name="budget"
            className="filter-select"
            value={searchParams.budget}
            onChange={handleSearch}
          >
            <option value="">Budget Range</option>
            <option value="0-500">$0 - $500</option>
            <option value="501-1000">$501 - $1000</option>
            <option value="1001+">$1001+</option>
          </select>
        </div>
      </div>

      <div className="jobs-grid">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className="budget-badge">
                ${job.budget.minimum} - ${job.budget.maximum}
              </span>
            </div>
            <div className="job-details">
              <p className="job-description">{job.description}</p>
              <div className="skills-container">
                {job.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
              <div className="job-footer">
                <span className="client-name">{job.clientName}</span>
                <span className="posted-date">Posted: {job.postedDate}</span>
              </div>
            </div>
            <button className="apply-btn">Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListing;