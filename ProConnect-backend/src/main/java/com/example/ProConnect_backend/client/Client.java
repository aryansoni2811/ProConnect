package com.example.ProConnect_backend.client;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_name")
    @JsonProperty("client_name")  // This annotation works for both serialization and deserialization
    private String clientName;    // Keep Java naming convention for the field
    
    private String company;
    private String address;
    private String phone;

    // Default constructor
    public Client() {
    }

    // Constructor with fields
    public Client(@JsonProperty("client_name") String clientName, 
                 String company, 
                 String address, 
                 String phone) {
        this.clientName = clientName;
        this.company = company;
        this.address = address;
        this.phone = phone;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @JsonProperty("client_name")  // For serialization
    public String getClientName() {
        return clientName;
    }

    @JsonProperty("client_name")  // For deserialization
    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", clientName='" + clientName + '\'' +
                ", company='" + company + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                '}';
    }
}