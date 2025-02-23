package com.example.ProConnect_backend.client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ClientService {
    
    private final ClientRepository clientRepository;
    
    @Autowired
    public ClientService(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }
    
    public Client createClient(Client client) {
        return clientRepository.save(client);
    }
    
    public Client getClientsByClientName(String clientName) {
        return clientRepository.findByClientName(clientName);
    }
    
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }
}