import React, { useState, useEffect } from 'react';
import './JobListing.css';

const JobListing = () => {
  const initialJobs = [
    {
      id: 1,
      title: 'Frontend Developer Needed',
      description: 'Looking for a skilled frontend developer with experience in modern web technologies and frameworks. Must be proficient in creating responsive and interactive user interfaces.',
      category: 'Web Development',
      budget: { minimum: 1000, maximum: 2000 },
      skills: ['React', 'JavaScript', 'CSS', 'TypeScript'],
      deadline: '2024-03-30',
      postedDate: '2024-02-21',
      clientName: 'Tech Corp',
      experience: '2-5 years',
      location: 'Remote'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      description: 'Seeking a creative UI/UX designer to help design intuitive and beautiful user interfaces for our web and mobile applications.',
      category: 'Design',
      budget: { minimum: 2000, maximum: 3500 },
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      deadline: '2024-04-15',
      postedDate: '2024-02-22',
      clientName: 'Design Studio',
      experience: '3+ years',
      location: 'Hybrid'
    },
    {
      id: 3,
      title: 'Mobile App Developer',
      description: 'Experienced mobile developer needed for iOS and Android app development using React Native.',
      category: 'Mobile Development',
      budget: { minimum: 3000, maximum: 5000 },
      skills: ['React Native', 'iOS', 'Android', 'Mobile Design'],
      deadline: '2024-03-25',
      postedDate: '2024-02-20',
      clientName: 'Mobile Tech Inc',
      experience: '4+ years',
      location: 'Remote'
    }
  ];

  const [jobs, setJobs] = useState(initialJobs);
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    category: '',
    budget: '',
    skills: []
  });

  // Rest of the states and handlers remain the same...
  const categories = [
    'Web Development',
    'Mobile Development',
    'Design',
    'Content Writing',
    'Digital Marketing'
  ];

  const budgetRanges = [
    { label: '$0 - $1000', min: 0, max: 1000 },
    { label: '$1001 - $2000', min: 1001, max: 2000 },
    { label: '$2001 - $3000', min: 2001, max: 3000 },
    { label: '$3001+', min: 3001, max: Infinity }
  ];

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  useEffect(() => {
    let filteredJobs = [...initialJobs];

    if (searchParams.keyword) {
      const keyword = searchParams.keyword.toLowerCase();
      filteredJobs = filteredJobs.filter(job => 
        job.title.toLowerCase().includes(keyword) ||
        job.description.toLowerCase().includes(keyword) ||
        job.skills.some(skill => skill.toLowerCase().includes(keyword))
      );
    }

    if (searchParams.category) {
      filteredJobs = filteredJobs.filter(job => 
        job.category === searchParams.category
      );
    }

    if (searchParams.budget) {
      const [minStr, maxStr] = searchParams.budget.split('-');
      const min = parseInt(minStr);
      const max = maxStr === 'Infinity' ? Infinity : parseInt(maxStr);
      
      filteredJobs = filteredJobs.filter(job => 
        job.budget.minimum >= min && 
        job.budget.maximum <= max
      );
    }

    setJobs(filteredJobs);
  }, [searchParams]);

  const handleClearFilters = () => {
    setSearchParams({
      keyword: '',
      category: '',
      budget: '',
      skills: []
    });
  };

  return (
    <div className="job-listing-page">
      <div className="job-listing-container">
        <div className="search-container">
          <div className="search-header">
            <h2 className="section-title">Find Your Next Project</h2>
            <button 
              className="clear-filters-btn"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
          <div className="search-section">
            <div className="search-filters">
              <input
                type="text"
                name="keyword"
                className="search-input"
                placeholder="Search by keyword, title, or skill..."
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
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                name="budget"
                className="filter-select"
                value={searchParams.budget}
                onChange={handleSearch}
              >
                <option value="">All Budgets</option>
                {budgetRanges.map(range => (
                  <option 
                    key={range.label} 
                    value={`${range.min}-${range.max}`}
                  >
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="results-count">
            Found {jobs.length} matching jobs
          </div>
        </div>

        {jobs.length > 0 ? (
          <div className="jobs-grid">
            {jobs.map(job => (
              <div key={job.id} className="job-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="job-card-content">
                      <div className="job-card-header">
                        <div className="job-title-section">
                          <h3 className="job-title">{job.title}</h3>
                          <span className="job-category">{job.category}</span>
                        </div>
                        <span className="budget-badge">
                          ${job.budget.minimum} - ${job.budget.maximum}
                        </span>
                      </div>

                      <div className="job-details">
                        <p className="job-description">{job.description}</p>
                        
                        <div className="job-metadata">
                          <div className="metadata-item">
                            <span className="metadata-label">Experience:</span>
                            <span className="metadata-value">{job.experience}</span>
                          </div>
                          <div className="metadata-item">
                            <span className="metadata-label">Location:</span>
                            <span className="metadata-value">{job.location}</span>
                          </div>
                        </div>

                        <div className="skills-container">
                          {job.skills.map(skill => (
                            <span key={skill} className="skill-tag">{skill}</span>
                          ))}
                        </div>

                        <div className="job-footer">
                          <div className="client-info">
                            <span className="client-name">{job.clientName}</span>
                            <span className="posted-date">Posted: {job.postedDate}</span>
                          </div>
                          <div className="deadline-info">
                            <span className="deadline-label">Deadline:</span>
                            <span className="deadline-date">{job.deadline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="back-content">
                      <h3 className="back-title">{job.title}</h3>
                      <p className="back-client">{job.clientName}</p>
                      <button className="apply-btn">Apply Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No jobs found matching your criteria</h3>
            <p>Try adjusting your filters or <button className="reset-link" onClick={handleClearFilters}>clear all filters</button></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;