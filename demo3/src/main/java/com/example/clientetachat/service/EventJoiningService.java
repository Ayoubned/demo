package com.example.clientetachat.service;

import org.springframework.stereotype.Service;

import com.example.clientetachat.model.EventJoining;
import com.example.clientetachat.repository.EventJoiningRepository;

import java.util.List;

@Service
public class EventJoiningService {

    private final EventJoiningRepository eventJoiningRepository;

    public EventJoiningService(EventJoiningRepository eventJoiningRepository) {
        this.eventJoiningRepository = eventJoiningRepository;
    }

    public EventJoining joinEvent(Long userId, Long eventId) {
        EventJoining eventJoining = new EventJoining();
        eventJoining.setUserId(userId);
        eventJoining.setEventId(eventId);
        return eventJoiningRepository.save(eventJoining);
    }

    public List<EventJoining> getEventsByUser(Long userId) {
    	return eventJoiningRepository.findByUserId(userId);
    }

    // Other necessary methods
}

