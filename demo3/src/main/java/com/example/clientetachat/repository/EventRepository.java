package com.example.clientetachat.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.clientetachat.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
    // Custom queries can be added here
}
