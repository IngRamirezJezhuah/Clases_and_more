package com.utd.ti.soa.esb_services.utils;

import java.nio.charset.StandardCharsets;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class Auth {
private final String SECRET_KEY= "Turmansasahikokuri122434=";
    
    public boolean validToken(String Token){
        try{
            SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes(StandardCharsets.UTF_8));

            Claims claims = Jwts.parserBuilder()
                .setSigningKey
        }
    }
}
