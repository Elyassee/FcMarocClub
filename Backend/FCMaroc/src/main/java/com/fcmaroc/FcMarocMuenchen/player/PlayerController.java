package com.fcmaroc.FcMarocMuenchen.player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/player")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @GetMapping("/players")
    public ResponseEntity<List<Player>> getAllPlayers() {
        return ResponseEntity.ok(playerService.getAllPlayers());
    }

    @PostMapping("/players")
    public ResponseEntity<Player> createPlayer(@RequestBody Player player){
        return ResponseEntity.ok(playerService.createPlayer(player));
    }

    @PutMapping("/players/{id}")
    public ResponseEntity<Player> updatePlayer(@PathVariable String id, @RequestBody Player playerToUpdate){
        Player player = playerService.getPlayer(id);

        if(player == null){
            return ResponseEntity.notFound().build();
        }

        playerToUpdate.setId(player.getId());
        final Player updatedPlayer = playerService.updatePlayer(playerToUpdate);

        return ResponseEntity.ok(updatedPlayer);
    }

    @DeleteMapping("/players/{id}")
    public ResponseEntity<Void> deletePlayer(@PathVariable String id){
        Player player = playerService.getPlayer(id);

        if(player == null){
            return ResponseEntity.notFound().build();
        }

        playerService.deletePlayer(id);

        return ResponseEntity.ok().build();
    }
}
