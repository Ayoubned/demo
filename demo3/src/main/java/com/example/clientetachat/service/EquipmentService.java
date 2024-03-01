package com.example.clientetachat.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.clientetachat.model.Equipment;
import com.example.clientetachat.repository.EquipmentRepository;

import io.micrometer.common.util.StringUtils;
import jakarta.persistence.criteria.Path;
import lombok.Value;

import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

@Service
public class EquipmentService {

  


    @Autowired
    private EquipmentRepository EquipmentRepository;

    public List<Equipment> findAll() {
        return (List<Equipment>) EquipmentRepository.findAll();
    }

    public Equipment findById(Long id) {
        return EquipmentRepository.findById(id).orElse(null);
    }

    public Equipment save(Equipment Equipment) {
        return EquipmentRepository.save(Equipment);
    }

    public void deleteById(Long id) {
        EquipmentRepository.deleteById(id);
    }

    public Equipment createOrUpdate (Equipment equipment, MultipartFile photoFile) throws IOException {
        if (photoFile!=null && !photoFile.isEmpty()) {
            if (photoFile!=null && !photoFile.isEmpty()) {
            	equipment.setPhoto(photoFile.getBytes());
            }
        }
        return EquipmentRepository.save(equipment);
    }



    // Additional business logic methods
}

