package com.example.ProConnect_backend.JobApplication;

import com.example.ProConnect_backend.Freelancer.FreelancerOnboarding;
import com.example.ProConnect_backend.Post_Get_Job.JobPosting;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class JobApplication {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "job_posting_id")
    private JobPosting jobPosting;

    @ManyToOne
    @JoinColumn(name = "freelancer_id")
    private FreelancerOnboarding freelancer;

    private String applicationDate;
    private String status; // "PENDING", "ACCEPTED", "REJECTED"


    // Default constructor
    public JobApplication() {}

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public JobPosting getJobPosting() {
        return jobPosting;
    }

    public void setJobPosting(JobPosting jobPosting) {
        this.jobPosting = jobPosting;
    }

    public FreelancerOnboarding getFreelancer() {
        return freelancer;
    }

    public void setFreelancer(FreelancerOnboarding freelancer) {
        this.freelancer = freelancer;
    }

    public String getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(String applicationDate) {
        this.applicationDate = applicationDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

   
}

