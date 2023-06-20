import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private API_URL = 'http://localhost:8080/api/players';

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }
}
