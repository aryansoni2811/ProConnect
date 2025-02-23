import React, { useState, useEffect } from 'react';
import './JobListing.css';

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [freelancerId, setFreelancerId] = useState(1);
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    category: '',
    budget: '',
    skills: []
  });

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

  // Fetch jobs from the backend API
  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8080/api/jobs/all');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      
      // Transform the data to match the frontend structure
      const transformedJobs = data.map(job => ({
        id: job.id,
        title: job.title,
        description: job.description,
        category: job.category,
        budget: {
          minimum: job.budgetMin,
          maximum: job.budgetMax
        },
        skills: job.skills,
        deadline: job.deadline,
        postedDate: job.postedDate,
        clientName: job.clientName,
        experience: job.experience,
        location: job.location
      }));

      setJobs(transformedJobs);
      setError(null);
    } catch (err) {
      setError('Failed to load jobs. Please try again later.');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };


  const handleApply = async (job) => {
    // First confirm with the user
    const confirmApplication = window.confirm(`Are you sure you want to apply for ${job.title}?`);
    console.log(job.id);
    if (!confirmApplication) return;
  
    try {
      const applicationData = {
        jobPosting: {
          id: job.id  // Fixed: Using job.id instead of response.id
        },
        freelancer: {
          id: freelancerId  // Using the freelancerId from state
        },
        applicationDate: new Date().toISOString().split('T')[0],
        status: "PENDING"
      };
  
      const response = await fetch('http://localhost:8080/api/applications/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit application');
      }
  
      // Handle successful application
      alert('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('Failed to submit application. Please try again.');
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs based on search parameters
  useEffect(() => {
    if (!loading && !error) {
      let filteredJobs = [...jobs];

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
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setSearchParams(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  const handleClearFilters = () => {
    setSearchParams({
      keyword: '',
      category: '',
      budget: '',
      skills: []
    });
    fetchJobs(); // Reload all jobs when filters are cleared
  };

  if (loading) {
    return <div className="loading">Loading jobs...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  

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
                      <button className="apply-btn" onClick={handleApply}>Apply Now</button>
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
