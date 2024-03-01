package com.example.clientetachat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clientetachat.model.User;

//UserRepository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    User findByUsername(String username);
}
