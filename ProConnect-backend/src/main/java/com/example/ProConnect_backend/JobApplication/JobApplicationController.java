package com.example.ProConnect_backend.JobApplication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/applications")
public class JobApplicationController {
    private final JobApplicationService jobApplicationService;

    @Autowired
    public JobApplicationController(JobApplicationService jobApplicationService) {
        this.jobApplicationService = jobApplicationService;
    }

    @PostMapping("/apply")
    public ResponseEntity<JobApplication> applyForJob(@RequestBody JobApplication application) {
        JobApplication createdApplication = jobApplicationService.createApplication(application);
        return ResponseEntity.ok(createdApplication);
    }

    @GetMapping("/client/{clientName}")
    public ResponseEntity<List<JobApplication>> getApplicationsByClient(@PathVariable String clientName) {
        List<JobApplication> applications = jobApplicationService.getApplicationsByClient(clientName);
        return ResponseEntity.ok(applications);
    }

    @GetMapping("/freelancer/{freelancerName}")
    public ResponseEntity<List<JobApplication>> getApplicationsByFreelancer(@PathVariable String freelancerName) {
        List<JobApplication> applications = jobApplicationService.getApplicationsByFreelancer(freelancerName);
        return ResponseEntity.ok(applications);
    }

    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<JobApplication>> getApplicationsByJob(@PathVariable Long jobId) {
        List<JobApplication> applications = jobApplicationService.getApplicationsByJobId(jobId);
        return ResponseEntity.ok(applications);
    }
}