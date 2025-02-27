package com.utd.ti.soa.esb_services.controller;

//import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping ;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import com.utd.ti.soa.esb_services.model.User;
//import com.utd.ti.soa.esb_services.utils.Auth;
@RestController
@RequestMapping("/api/v1/esb")

public class EsbController {
    private final WebClient webClient = WebClient.builder()
    .defaultHeader("Content-Type", "application/json")
    .build();


    //esta es igual que lo mismo que con node pero desde java, ahhh que dolor de cabeza
    @PostMapping("/user")
    //para metodos en java se tiene que definir que tipo de metodo va a ser
    public ResponseEntity<String> createUser (@RequestBody User user){
            /*@RequestHeader(HttpHeaders.AUTHORIZATION) String token {}
            System.out.println("request Body: " + user);
            System.out.println("Token recibido: " + token);
            //validar el token
            if !auth.validateToken{token}*/

        String response = webClient.post()
        .uri("http://localhost:3000/api/users")//servicio de cliente
        .bodyValue(user)
        .retrieve()
        .bodyToMono(String.class)
        .block();
        return ResponseEntity.ok(response);
        //user.getUsername()
        //return ResponseEntity.ok().build();
    } //que tipo de dato va a dar

}
