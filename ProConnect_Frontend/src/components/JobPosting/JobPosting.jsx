import React, { useState } from 'react';
import './JobPosting.css';

const JobPosting = () => {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    category: '',
    budget: {
      minimum: '',
      maximum: ''
    },
    deadline: '',
    skills: [],
    projectType: 'fixed', // fixed or hourly
  });

  const categories = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Content Writing',
    'Digital Marketing',
    'Data Science',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleBudgetChange = (e) => {
    const { name, value } = e.target;
    setJobData(prevState => ({
      ...prevState,
      budget: {
        ...prevState.budget,
        [name]: value
      }
    }));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setJobData(prevState => ({
      ...prevState,
      skills: skills
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Posted:', jobData);
    // Add API call here
  };

  return (
    <div className="post-job-container">
      <div className="form-card1">
        <form className="form" onSubmit={handleSubmit}>
          <h2 className="form-heading">Post a New Job</h2>

          <div className="form-field">
            <input
              type="text"
              name="title"
              className="input-field"
              value={jobData.title}
              placeholder="Job Title"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <textarea
              name="description"
              className="input-field"
              value={jobData.description}
              placeholder="Job Description"
              onChange={handleChange}
              required
              rows="4"
            />
          </div>

          <div className="form-field">
            <select
              name="category"
              className="input-field"
              value={jobData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="form-field budget-fields">
            <select
              name="projectType"
              className="input-field"
              value={jobData.projectType}
              onChange={handleChange}
              required
            >
              <option value="fixed">Fixed Price</option>
              <option value="hourly">Hourly Rate</option>
            </select>
          </div>

          <div className="form-field budget-range">
            <input
              type="number"
              name="minimum"
              className="input-field"
              value={jobData.budget.minimum}
              placeholder="Min Budget"
              onChange={handleBudgetChange}
              required
            />
            <input
              type="number"
              name="maximum"
              className="input-field"
              value={jobData.budget.maximum}
              placeholder="Max Budget"
              onChange={handleBudgetChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              type="text"
              name="skills"
              className="input-field"
              placeholder="Required Skills (comma-separated)"
              onChange={handleSkillsChange}
              required
            />
          </div>

          <div className="form-field">
            <input
              type="date"
              name="deadline"
              className="input-field"
              value={jobData.deadline}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="sendMessage-btn">
            Post Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPosting;