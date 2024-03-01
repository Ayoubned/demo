package com.example.clientetachat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.clientetachat.model.EventJoining;
import com.example.clientetachat.service.EventJoiningService;

import java.util.List;

@RestController
@RequestMapping("/api/eventJoining")
public class EventJoiningController {

    private final EventJoiningService eventJoiningService;

    @Autowired
    public EventJoiningController(EventJoiningService eventJoiningService) {
        this.eventJoiningService = eventJoiningService;
    }

    @PostMapping
    public EventJoining joinEvent(@RequestBody EventJoining eventJoining) {
        return eventJoiningService.joinEvent(eventJoining.getUserId(), eventJoining.getEventId());
    }

    @GetMapping("/user/{userId}")
    public List<EventJoining> getMyEvents(@PathVariable("id") Long userId) {
        return eventJoiningService.getEventsByUser(userId);
    }

    // Other necessary endpoints
}

