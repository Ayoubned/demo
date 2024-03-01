package com.example.clientetachat.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clientetachat.model.EventJoining;

public interface EventJoiningRepository extends JpaRepository<EventJoining, Long> {
	List<EventJoining> findByUserId(Long userId);
}

