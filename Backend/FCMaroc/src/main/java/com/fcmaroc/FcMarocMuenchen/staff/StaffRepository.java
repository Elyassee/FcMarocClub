package com.fcmaroc.FcMarocMuenchen.staff;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends MongoRepository<Staff, String> {
    Staff findByFullName(String fullName);
}