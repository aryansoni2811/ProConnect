package com.example.ProConnect_backend.Post_Get_Job;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobPostingService {

    private final JobPostingRepository jobPostingRepository;

    @Autowired
    public JobPostingService(JobPostingRepository jobPostingRepository) {
        this.jobPostingRepository = jobPostingRepository;
    }

    public JobPosting createJobPosting(JobPosting jobPosting) {
        return jobPostingRepository.save(jobPosting);
    }

    public List<JobPosting> getJobPostingsByClientName(String clientName) {
        return jobPostingRepository.findByClientName(clientName);
    }
}