package com.fcmaroc.FcMarocMuenchen.player;
import com.fcmaroc.FcMarocMuenchen.person.Person;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("players")
@Data
public class Player extends Person {
    private String idol;
    private double height;

}
