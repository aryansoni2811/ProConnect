package com.example.ProConnect_backend.JobApplication;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    List<JobApplication> findByJobPostingClientName(String clientName);
    List<JobApplication> findByFreelancerFullName(String fullName);
    List<JobApplication> findByJobPostingId(Long jobId);
}

