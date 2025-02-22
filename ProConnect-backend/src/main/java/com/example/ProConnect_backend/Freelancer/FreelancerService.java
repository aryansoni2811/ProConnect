package com.example.ProConnect_backend.Freelancer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FreelancerService {
    
    private final FreelancerRepository freelancerRepository;

    @Autowired
    public FreelancerService(FreelancerRepository freelancerRepository) {
        this.freelancerRepository = freelancerRepository;
    }

    public FreelancerOnboarding createFreelancer(FreelancerOnboarding freelancer) {
        return freelancerRepository.save(freelancer);
    }

    public List<FreelancerOnboarding> getFreelancersByName(String fullName) {
        return freelancerRepository.findByFullName(fullName);
    }
}