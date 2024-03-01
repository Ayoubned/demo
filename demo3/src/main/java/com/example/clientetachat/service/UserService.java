package com.example.clientetachat.service;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import com.example.clientetachat.model.User;
import com.example.clientetachat.repository.UserRepository;

//UserService
@Service
public class UserService {
@Autowired
private UserRepository userRepository;

public void saveUser(User user) {
	 
    userRepository.save(user);
}

public User findByEmail(String email) {
    return userRepository.findByEmail(email);
}
public User findByUsername(String username) {
    return userRepository.findByUsername(username);
}

public boolean authenticate(String username, String password) {
    User user = userRepository.findByUsername(username);
    if (user != null) {
        // Compare the provided password with the password stored in the database
        return user.getPassword().equals(password);
    }
    return false;
}
}