package com.example.clientetachat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.clientetachat.model.Equipment;
import com.example.clientetachat.service.EquipmentService;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/Equipment")
public class EquipmentController {

    @Autowired
    private EquipmentService EquipmentService;

    @GetMapping
    public List<Equipment> getAllEquipment() {
        return EquipmentService.findAll();
    }

    @GetMapping("/{id}")
    public Equipment getEquipmentById(@PathVariable("id") Long id) {
        return EquipmentService.findById(id);
    }
 
    @PostMapping
    public Equipment createEquipment(@RequestParam("equipment") String equipment, @RequestParam(value = "photo", required = false) MultipartFile photoFile) throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        Equipment equipmentObject = mapper.readValue(equipment, Equipment.class);
        return EquipmentService.createOrUpdate(equipmentObject, photoFile);
    }


//    @PutMapping("/{id}")
//    public ResponseEntity<Equipment> updateEquipment(@PathVariable("id") Long id, @RequestBody Equipment equipmentDetails) {
//        Equipment equipment = EquipmentService.findById(id);
//
//        // Update logic here
//        equipment.setName(equipmentDetails.getName());
//        equipment.setDescription(equipmentDetails.getDescription());
//        equipment.setLender(equipmentDetails.getLender());
//        equipment.setRating(equipmentDetails.getRating());
//        equipment.setPhoto(equipmentDetails.getPhoto());
//        // Add more fields as necessary
//
//        final Equipment updatedEquipment = EquipmentService.save(equipment);
//        return ResponseEntity.ok(updatedEquipment);
//    }
    @PutMapping(value = "/{id}", consumes = "multipart/form-data")
    public ResponseEntity<Equipment> updateEquipment(
            @PathVariable("id") Long id,
            @RequestParam("equipment") String equipmentJson,
            @RequestParam(value = "photo", required = false) MultipartFile photoFile) throws IOException {

        ObjectMapper mapper = new ObjectMapper();
        Equipment equipmentObject = mapper.readValue(equipmentJson, Equipment.class);
        Equipment existingEquipment = EquipmentService.findById(id);

        // Update existing equipment fields from equipmentObject
        existingEquipment.setName(equipmentObject.getName());
        existingEquipment.setDescription(equipmentObject.getDescription());
        existingEquipment.setLender(equipmentObject.getLender());
        existingEquipment.setRating(equipmentObject.getRating());

        Equipment updatedEquipment = EquipmentService.createOrUpdate(existingEquipment, photoFile);;
        return ResponseEntity.ok(updatedEquipment);
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEquipment(@PathVariable("id") Long id) {
        EquipmentService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    // Additional endpoint methods
}

