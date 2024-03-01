package com.example.clientetachat.repository;

import org.springframework.data.repository.CrudRepository;

import com.example.clientetachat.model.Equipment;



public interface EquipmentRepository extends CrudRepository<Equipment, Long> {
	void deleteById(Long id);
}

