package com.example.ProConnect_backend.JobApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class JobApplicationService {
    private final JobApplicationRepository jobApplicationRepository;

    @Autowired
    public JobApplicationService(JobApplicationRepository jobApplicationRepository) {
        this.jobApplicationRepository = jobApplicationRepository;
    }

    public JobApplication createApplication(JobApplication application) {
        application.setStatus("PENDING");
        return jobApplicationRepository.save(application);
    }

    public List<JobApplication> getApplicationsByClient(String clientName) {
        return jobApplicationRepository.findByJobPostingClientName(clientName);
    }

    public List<JobApplication> getApplicationsByFreelancer(String freelancerName) {
        return jobApplicationRepository.findByFreelancerFullName(freelancerName);
    }

    public List<JobApplication> getApplicationsByJobId(Long jobId) {
        return jobApplicationRepository.findByJobPostingId(jobId);
    }
}

