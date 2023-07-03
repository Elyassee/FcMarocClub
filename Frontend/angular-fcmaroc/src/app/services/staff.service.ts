import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private API_URL = 'http://localhost:8080/api/staff';

  constructor(private http: HttpClient) { }

  public getStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(`${this.API_URL}/staff`);
  }

  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(`${this.API_URL}/Staff`, staff);
  }


  updateStaff(staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.API_URL}/Staff`, staff);
  }

  deleteStaff(staffID: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/Staff/${staffID}`);
  }
}