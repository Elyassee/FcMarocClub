import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/player';
import { StaffService } from '../../services/staff.service';
import { Staff } from '../../models/staff';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  players: Player[] = [];
  staff: Staff[] = [];

  constructor(private playerService: PlayerService, private staffService: StaffService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(data => {
      this.players = data;
    }, error => {
      console.error('Error: ', error);
    });

    this.staffService.getStaff().subscribe(data => {
      this.staff = data;
    }, error => {
      console.error('Error: ', error);
    });
  }
}