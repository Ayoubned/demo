package com.example.clientetachat.controller;
import java.security.Principal;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.clientetachat.model.Equipment;
import com.example.clientetachat.model.Reservation;
import com.example.clientetachat.service.ReservationService;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
	 private final ReservationService reservationService;

	    public ReservationController(ReservationService reservationService) {
	        this.reservationService = reservationService;
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Reservation> getReservationById(@PathVariable Long id) {
	        return reservationService.getReservationById(id)
	            .map(ResponseEntity::ok)
	            .orElse(ResponseEntity.notFound().build());
	    }
	    @GetMapping
	    public ResponseEntity<List<Reservation>> getAllReservations() {
	        List<Reservation> reservations = reservationService.findAllReservations();
	        return ResponseEntity.ok(reservations);
	    }

	    @PostMapping
	    public ResponseEntity<Reservation> createReservation(@RequestBody ReservationDto reservationDto) {
	        Reservation reservation = reservationService.createReservation(
	            reservationDto.getUserId(), 
	            reservationDto.getEquipmentId()
	        );
	        return ResponseEntity.ok(reservation);
	    }
	    @DeleteMapping("/{id}")
	    public ResponseEntity<?> deletereservation(@PathVariable("id") Long id) {
	        reservationService.deleteById(id);
	        return ResponseEntity.ok().build();
	    }


}
