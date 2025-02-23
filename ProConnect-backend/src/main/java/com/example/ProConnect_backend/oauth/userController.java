package com.example.ProConnect_backend.oauth;

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

import com.example.ProConnect_backend.client.Client;
import com.example.ProConnect_backend.client.ClientService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin
public class userController {
    
    UserRepository ur;
    
  
    
    userController(UserRepository ur) {
		super();
		this.ur = ur;
	}

	
    
    @GetMapping("/{role}")
    public User getClientsByClientName(@PathVariable String role) {
//        Client clients = clientService.getClientsByClientName(clientName);
//        return ResponseEntity.ok(clients);
    	User u=ur.findByRole(null);
    	u.setRole(role);
    	ur.deleteById(u.getId());
    	ur.save(u);
    	return u;
    
    }
   
}