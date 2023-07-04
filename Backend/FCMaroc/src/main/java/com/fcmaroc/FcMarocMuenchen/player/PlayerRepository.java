package com.fcmaroc.FcMarocMuenchen.player;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends MongoRepository<Player, String> {
    Player findByNameAndVorname(String name, String vorname);
}

