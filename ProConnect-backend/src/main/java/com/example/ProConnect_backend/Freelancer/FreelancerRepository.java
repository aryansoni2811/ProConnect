package com.example.ProConnect_backend.Freelancer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface FreelancerRepository extends JpaRepository<FreelancerOnboarding, Long> {
    List<FreelancerOnboarding> findByFullName(String fullName);
}
