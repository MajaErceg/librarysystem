import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = "http://127.0.0.1:8080/api/";

  constructor(private http: HttpClient) { }

  //daj mi sve usere
  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.baseUrl}all`);
  }

  //kreiraj usera
  createUsers(users: Users): Observable<Object> {
    return this.http.post(`${this.baseUrl}create`, users);
  }
  
  
  edit(): Observable<Users> {
  return this.http.put<Users>(`${this.baseUrl}`, Users)
  }

  //nadji mi po id ju(br clanke karte)
  getUsersById( membershipNumber: number): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}all/${ membershipNumber}`)
  }

  //izmeni userove podatke
  updateUsers(users: Users): Observable<Object>{
    return this.http.put(`${this.baseUrl}update/${users.membershipNumber}`, users);
  }

  //izbrisi usera
  deleteUsers(membershipNumber: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}remove/${membershipNumber}`);
  }

}
