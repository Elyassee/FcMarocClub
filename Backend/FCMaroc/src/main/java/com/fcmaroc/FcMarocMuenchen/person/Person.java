package com.fcmaroc.FcMarocMuenchen.person;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Data
public class Person {
    @Id
    private String id;
    private String fullName;
    private LocalDate dateOfBirth;
    private String imageUrl;

}
