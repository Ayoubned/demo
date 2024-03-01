package com.example.clientetachat.controller;

public class ReservationDto {
    private Long userId;
    private Long equipmentId;
    // Other reservation details can be added here

    // Getters and setters for each field
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(Long equipmentId) {
        this.equipmentId = equipmentId;
    }

    // You can add other getters and setters for additional fields
}

