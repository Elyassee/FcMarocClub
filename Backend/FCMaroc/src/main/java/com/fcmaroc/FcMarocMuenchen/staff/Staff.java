package com.fcmaroc.FcMarocMuenchen.staff;
import com.fcmaroc.FcMarocMuenchen.person.Person;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("staff")
@Data
public class Staff extends Person {

    String role;
}
