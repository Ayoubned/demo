package com.example.clientetachat.service;
import com.example.clientetachat.model.Reservation;
import com.example.clientetachat.repository.ReservationRepository;
import com.example.clientetachat.repository.UserRepository;
import com.example.clientetachat.model.User;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private UserRepository userRepository;

    public List<Reservation> getReservationsForCurrentUser(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            // Assuming there is a method in ReservationRepository to find reservations by user
            return reservationRepository.findByUserId(user.getId());
        } else {
            return new ArrayList<>();
        }
    }
    public Reservation createReservation(Long userId, Long equipmentId) {
        // Create a new Reservation object
        Reservation newReservation = new Reservation();
        newReservation.setUserId(userId);
        newReservation.setEquipmentId(equipmentId);
        // Set other necessary details

        // Save the reservation
        return reservationRepository.save(newReservation);
    }
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }
    public List<Reservation> findAllReservations() {
        return reservationRepository.findAll();
    }
    public Reservation findByequipmentId(Long equipmentId) {
        return reservationRepository.findByequipmentId(equipmentId);
    }
    public void deleteById(Long id) {
        reservationRepository.deleteById(id);
    }


}


