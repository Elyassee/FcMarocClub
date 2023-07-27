import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private API_URL = 'http://localhost:8081/api/player';

  constructor(private http: HttpClient) { }

  public getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.API_URL}/players`);
  }

  addPlayers(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.API_URL}/players`, player);
  }


  updatePlayers(player: Player): Observable<Player> {
    return this.http.put<Player>(`${this.API_URL}/players`, player);
  }

  deletePlayer(playerId: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/players/${playerId}`);
  }
}
