package com.example.ProConnect_backend.Freelancer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/freelancers")
public class FreelancerController {

    private final FreelancerService freelancerService;

    @Autowired
    public FreelancerController(FreelancerService freelancerService) {
        this.freelancerService = freelancerService;
    }

    @PostMapping("/create")
    public ResponseEntity<FreelancerOnboarding> createFreelancer(@RequestBody FreelancerOnboarding freelancer) {
        FreelancerOnboarding createdFreelancer = freelancerService.createFreelancer(freelancer);
        return ResponseEntity.ok(createdFreelancer);
    }

    @GetMapping("/name/{fullName}")
    public ResponseEntity<List<FreelancerOnboarding>> getFreelancersByName(@PathVariable String fullName) {
        List<FreelancerOnboarding> freelancers = freelancerService.getFreelancersByName(fullName);
        return ResponseEntity.ok(freelancers);
    }
}

