package com.utd.ti.soa.esb_services.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.utd.ti.soa.esb_services.model.User;

@RestController
@RequestMapping("/api/v1/esb")
public class EsbController {
    private final WebClient webClient = WebClient.create();

    //esta es igual que lo mismo que con node pero desde java, ahhh que dolor de cabeza
    @PostMapping("/user")
    //para metodos en java se tiene que definir que tipo de metodo va a ser
    public ResponseEntity<String> createUser (User user){
        String response = webClient.post()
        .uri("https://localhost:3001/cilentes")//servicio de cliente
        .bodyValue(user)
        .retrieve()
        .bodyToMono(String.class)
        .block();
        return ResponseEntity.ok(response);
        //user.getUsername()
        //return ResponseEntity.ok().build();
    } //que tipo de dato va a dar

}
