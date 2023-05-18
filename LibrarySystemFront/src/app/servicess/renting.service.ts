import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Renting } from '../models/renting';

@Injectable({
  providedIn: 'root'
})
export class RentingService {

  private baseUrl = "http://127.0.0.1:8080/api/";

  constructor(private http: HttpClient) { }

  getRenting(): Observable<Renting[]>{
    return this.http.get<Renting[]>(`${this.baseUrl}`);
  }

  createRenting(renting: Renting): Observable<Object> {
    return this.http.post(`${this.baseUrl}history/create`, renting);
  }

  edit(): Observable<Renting> {
    return this.http.put<Renting>(`${this.baseUrl}`, Renting)
  }

  getRentingById(id: number): Observable<Renting[]> {
    return this.http.get<Renting[]>(`${this.baseUrl}all/history/${id}`)
  }

  updateRenting(renting: Renting): Observable<Object>{
    return this.http.put(`${this.baseUrl}`, renting);
  }

  deleteRenting(membershipNumber: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/${membershipNumber}`);
  }
}
