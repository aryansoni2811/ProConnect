import React, { useState, useEffect, useRef } from "react";
import JobPostingForm from "./JobPostingForm";
import "./JobPosting.css";

const JobPosting = () => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormSubmit = (formData) => {
    console.log(formData);
    setShowForm(false);
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    if (showForm) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
      <div className="page-container">
        <button className="floating-button" onClick={toggleForm}>
          New Request
        </button>
        {showForm && (
            <div ref={formRef}>
              <JobPostingForm onSubmit={handleFormSubmit} />
            </div>
        )}
      </div>
  );
};

export default JobPosting;