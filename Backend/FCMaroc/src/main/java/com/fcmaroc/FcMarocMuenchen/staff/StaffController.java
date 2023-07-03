package com.fcmaroc.FcMarocMuenchen.staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/staff")
public class StaffController {

    private final StaffService staffService;

    @Autowired
    public StaffController(StaffService staffService) {
        this.staffService = staffService;
    }

    @GetMapping("/staff")
    public ResponseEntity<List<Staff>> getAllStaff() {
        return ResponseEntity.ok(staffService.getAllStaff());
    }

    @PostMapping("/staff")
    public ResponseEntity<Staff> createStaff(@RequestBody Staff staff){
        return ResponseEntity.ok(staffService.createStaff(staff));
    }

    @PutMapping("/staff/{id}")
    public ResponseEntity<Staff> updateStaff(@PathVariable String id, @RequestBody Staff staffToUpdate){
        Staff staff = staffService.getStaff(id);

        if(staff == null){
            return ResponseEntity.notFound().build();
        }

        staffToUpdate.setId(staff.getId());
        final Staff updatedStaff = staffService.updateStaff(staffToUpdate);

        return ResponseEntity.ok(updatedStaff);
    }

    @DeleteMapping("/staff/{id}")
    public ResponseEntity<Void> deleteStaff(@PathVariable String id){
        Staff staff = staffService.getStaff(id);

        if(staff == null){
            return ResponseEntity.notFound().build();
        }

        staffService.deleteStaff(id);

        return ResponseEntity.ok().build();
    }
}
