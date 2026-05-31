package com.tranphuongnam.portfolio.controller;

import com.tranphuongnam.portfolio.security.JwtService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/token")
    public Map<String, String> issueDemoToken(@RequestBody LoginRequest request) {
        // Demo-only login for portfolio code. Replace with database users and BCrypt in production.
        if (!"admin".equals(request.username()) || !"portfolio123".equals(request.password())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid credentials");
        }

        return Map.of("token", jwtService.generateToken(request.username()));
    }

    public record LoginRequest(String username, String password) {
    }
}
