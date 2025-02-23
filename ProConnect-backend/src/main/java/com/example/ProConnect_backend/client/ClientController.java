package com.example.ProConnect_backend.client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
@CrossOrigin
public class ClientController {
    
    private final ClientService clientService;
    
    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }
    
    @PostMapping("/create")
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        Client createdClient = clientService.createClient(client);
        return ResponseEntity.ok(createdClient);
    }
    
    @GetMapping("/client/{clientName}")
    public ResponseEntity<Client> getClientsByClientName(@PathVariable String clientName) {
        Client clients = clientService.getClientsByClientName(clientName);
        return ResponseEntity.ok(clients);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<Client>> getAllClients() {
        List<Client> clients = clientService.getAllClients();
        return ResponseEntity.ok(clients);
    }
   
}