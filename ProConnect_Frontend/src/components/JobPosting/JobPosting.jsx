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
            fetchJobs(user.name); // Fetch jobs based on client name
        } else {
            navigate("/UserDetailsForm");
        }
    }, [navigate]);

    const handleAcceptNow = async (job) => {
        try {
            const response = await fetch('http://localhost:8080/product/v1/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: job.budgetMax * 100, // Convert to cents for Stripe
                    quantity: 1,
                    name: job.title, // Use the job title as the product name
                    currency: 'USD'
                })
            });
    
            if (!response.ok) {
                throw new Error('Payment initiation failed');
            }
    
            const data = await response.json();
            
            if (data.sessionUrl) {
                // Redirect to Stripe checkout page
                window.location.href = data.sessionUrl;
            } else {
                throw new Error('No session URL received');
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
            // Handle error - you might want to show an error message to the user
            alert('Failed to initiate payment. Please try again.');
        }
    };

    // Function to fetch jobs by client name
    const fetchJobs = async (clientName) => {
        try {
            const response = await fetch(`http://localhost:8080/api/jobs/client/abcd`);
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
                <h1 className="Job-title">Job Listings</h1>
                <button className="newReq" onClick={handleUserSelection}>
                    New Request
                </button>
            </div>

            {/* Display User Details */}
            <div className="user-info">
                {userDetails ? (
                    <>
                        <h2>Welcome, {userDetails.name}</h2>
                        <p>
                            <strong>Company:</strong> {userDetails.company}
                        </p>
                        <p>
                            <strong>Email:</strong> {userDetails.email}
                        </p>
                    </>
                ) : (
                    <p>Loading user details...</p>
                )}
            </div>

            {/* Job List */}
            <div className="job-list">
                {loading ? (
                    <p>Loading job listings...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : jobData.length > 0 ? (
                    jobData.map((job, index) => (
                        <div key={index} className="job-card">
                            <h2>{job.title}</h2>
                            <p>
                                <strong>Category:</strong> {job.category}
                            </p>
                            <p>
                                <strong>Description:</strong> {job.description}
                            </p>
                            <p>
                                <strong>Budget:</strong> ${job.budgetMin} - ${job.budgetMax}
                            </p>
                            <p>
                                <strong>Deadline:</strong> {job.deadline}
                            </p>
                            <p>
                                <strong>Client:</strong> {job.clientName} ({job.experience})
                            </p>
                            <p>
                                <strong>Location:</strong> {job.location}
                            </p>
                            <button 
                                className="apply-btn" 
                                onClick={() => handleAcceptNow(job)}
                            >
                                Accept Now
                            </button>
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
