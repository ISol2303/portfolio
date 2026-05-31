package com.tranphuongnam.portfolio.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @GetMapping("/health")
    public Map<String, String> secureHealth(Authentication authentication) {
        return Map.of(
                "status", "secured endpoint is reachable",
                "user", authentication.getName()
        );
    }
}
