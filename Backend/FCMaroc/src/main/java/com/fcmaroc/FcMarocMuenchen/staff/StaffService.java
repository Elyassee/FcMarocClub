package com.fcmaroc.FcMarocMuenchen.staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {

    private final StaffRepository staffRepository;

    @Autowired
    public StaffService(StaffRepository staffRepository) {
        this.staffRepository = staffRepository;
    }

    public Staff createStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public List<Staff> getAllStaff() {
        return staffRepository.findAll();
    }

    public Staff getStaff(String id) {
        return staffRepository.findById(id).orElse(null);
    }

    public Staff updateStaff(Staff staff) {
        return staffRepository.save(staff);
    }

    public void deleteStaff(String id) {
        staffRepository.deleteById(id);
    }
}
