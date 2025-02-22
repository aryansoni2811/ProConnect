package com.example.ProConnect_backend.Post_Get_Job;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPostingRepository extends JpaRepository<JobPosting, Long> {
    List<JobPosting> findByClientName(String clientName);
}
