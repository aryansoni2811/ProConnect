package com.example.ProConnect_backend.Post_Get_Job;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.batch.BatchProperties;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/jobs")
public class JobPostingController {

    private final JobPostingService jobPostingService;
    private final JobPostingRepository jpr;

    @Autowired
    JobPostingController(JobPostingService jobPostingService, JobPostingRepository jpr) {
        super();
        this.jobPostingService = jobPostingService;
        this.jpr = jpr;
    }


    @PostMapping("/create")
    public ResponseEntity<JobPosting> createJobPosting(@RequestBody JobPosting jobPosting) {
        JobPosting createdJob = jobPostingService.createJobPosting(jobPosting);
        return ResponseEntity.ok(createdJob);
    }




    @GetMapping("/client/{clientName}")
    public ResponseEntity<List<JobPosting>> getJobsByClientName(@PathVariable String clientName) {
        List<JobPosting> jobs = jobPostingService.getJobPostingsByClientName(clientName);
        return ResponseEntity.ok(jobs);
    }
    @GetMapping("/client/{clientName}/check")
    public JobPosting checkJobsByClientName(@PathVariable String clientName) {
        return (JobPosting) jpr.findByClientName(clientName);

    }

    @GetMapping("/all")
    public ResponseEntity<List<JobPosting>> getallClient()
    {
        List<JobPosting> alljobs=jpr.findAll();
        return ResponseEntity.ok(alljobs);
    }

}