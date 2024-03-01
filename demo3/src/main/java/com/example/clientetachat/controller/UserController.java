package com.example.clientetachat.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.clientetachat.model.Equipment;
import com.example.clientetachat.model.User;
import com.example.clientetachat.repository.UserRepository;
import com.example.clientetachat.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpSession;

//UserController
@RestController
public class UserController {
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepository userRepository;
//@PostMapping("/signup")
//public ResponseEntity<String> signUp(@RequestBody Map<String, String> signUpData) {
//    // Extract email and password from request body
//    String email = signUpData.get("email");
//    String password = signUpData.get("password");
//    String username = signUpData.get("username");
//
//    // Check if the email already exists
//    if (userService.findByEmail(email) != null) {
//        return ResponseEntity.badRequest().body("Email already exists");
//    }
//    if (userService.findByUsername(username) != null) {
//        return ResponseEntity.badRequest().body("Name already exists");
//    }
//
//    // Create a new user
//    User user = new User();
//    user.setEmail(email);
//    user.setPassword(password);
//    user.setUsername(username);
//
//    // Save the user to the database
//    userService.saveUser(user);
//    return ResponseEntity.status(HttpStatus.FOUND).header("Location", "/login.html").body(null);
//}

	@PostMapping("/signup")
public ResponseEntity<String> signUp(@RequestBody User user) {
    
   // Check if the email already exists
    if (userService.findByUsername(user.getUsername()) != null) {
       return ResponseEntity.badRequest().body("username already exists");
    }

    // Save the user to the database
   userService.saveUser(user);
    return ResponseEntity.status(HttpStatus.FOUND).header("Location", "/login.html").body(null);
}


	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
		String username = loginData.get("username");
		String password = loginData.get("password");

		// Authenticate user
		if (userService.authenticate(username, password)) {
			User user = userRepository.findByUsername(username);
			if (user != null) {
				Map<String, Object> response = new HashMap<>();
				response.put("message", "Login successful");
				response.put("userId", user.getId());
				return ResponseEntity.ok(response);
			}
		}
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
	}

//@Autowired
//private PasswordEncoder passwordEncoder;
//
//@Autowired
//private UserRepository userRepository;
//
//@Autowired
//private AuthenticationManager authenticationManager;
//
//@Autowired
//private CustomUserDetailsService userDetailsService;
//
//@PostMapping("/login")
//public String login(@RequestBody LoginRequest loginRequest) {
//    Authentication authentication = authenticationManager.authenticate(
//            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
//    );
//    SecurityContextHolder.getContext().setAuthentication(authentication);
//    return "redirect:/home";
//}
//
//@PostMapping("/signup")
//public String signup(@RequestBody User user) {
//    user.setPassword(passwordEncoder.encode(user.getPassword()));
//    userRepository.save(user);
//    return "redirect:/login";
//}
}
