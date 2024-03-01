package com.example.clientetachat.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Collection;
//User entity class
@Entity
@Table(name = "users")
public class User  {
 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long id;
 private String username;
 private String email;
 private String password;


public String getUsername() {
	return username;
}


public void setUsername(String username) {
	this.username = username;
}


public Long getId() {
	return id;
}
public void setId(Long id) {
	this.id = id;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}


}






