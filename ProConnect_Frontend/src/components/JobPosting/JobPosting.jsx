import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./JobPosting.css";

const JobPosting = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [jobData, setJobData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("userDetails");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUserDetails(user);
            fetchJobs(user.name);
        } else {
            navigate("/UserDetailsForm");
        }
    }, [navigate]);

    const fetchJobs = async (clientName) => {
        try {
            const response = await fetch(`http://localhost:8080/api/jobs/client/John%20Smith`);
            if (!response.ok) {
                throw new Error("Failed to fetch jobs");
            }
            const data = await response.json();
            setJobData(data);
        } catch (error) {
            console.error("Error fetching jobs:", error);
            setError("Failed to load job listings. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const handleUserSelection = () => {
        navigate("/JobPostingForm");
    };

    return (
        <div className="container">
            <div className="newReq-container">
                <div className="user-info">
                    {userDetails ? (
                        <>
                            <h2>Welcome, Tirth</h2>
                            <p><strong>Company:</strong> {userDetails.company}</p>
                            <p><strong>Email:</strong> bhadanitirth@gmail.com</p>
                        </>
                    ) : (
                        <p>Loading user details...</p>
                    )}
                </div>
                <h1 className="Job-title">Job Listings</h1>
                <button className="newReq" onClick={handleUserSelection}>
                    New Request
                </button>
            </div>

            <div className="job-list">
                {loading ? (
                    <p>Loading job listings...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : jobData.length > 0 ? (
                    jobData.map((job, index) => (
                        <div key={index} className="job-card">
                            <div className="card-inner">
                                <div className="card-front">
                                    <div className="job-card-header">
                                        <h2 className="job-title">{job.title}</h2>
                                        <span className="job-category">{job.category}</span>
                                    </div>
                                    <div className="job-details">
                                        <p className="job-description">{job.description}</p>
                                        <div className="job-metadata">
                                            <div className="metadata-item">
                                                <span className="metadata-label">Budget:</span>
                                                <span className="metadata-value">${job.budgetMin} - ${job.budgetMax}</span>
                                            </div>
                                            <div className="metadata-item">
                                                <span className="metadata-label">Deadline:</span>
                                                <span className="metadata-value">{job.deadline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="back-content">
                                        <h2 className="back-title">{job.title}</h2>
                                        <p className="back-client">Client: {job.clientName} ({job.experience})</p>
                                        <p><strong>Location:</strong> {job.location}</p>
                                        <button className="apply-btn">Accept Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No job listings found.</p>
                )}
            </div>
        </div>
    );
};

export default JobPosting;
