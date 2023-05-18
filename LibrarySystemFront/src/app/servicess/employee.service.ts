import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Employee {
  fullname: string;
  email: string;
  username: string;
  password: string;

}
export interface EmployeeLogin {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public insert(model: Employee) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/employee/insert", model);
  }

  public login(model: EmployeeLogin) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/employee/login", model);
  }

  public findByUsername(username: String) : Observable<HttpResponse<any>>{
    return this.http.get<any>("http://localhost:8080/employee/employ/" + username);
  }

  public update(model: Employee) : Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/employee/update", model);
  }
}
