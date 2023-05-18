import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, EmployeeService } from 'src/app/servicess/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: any;
  errorMessage: string | any;

  constructor(private employee_s: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
  var model: Employee = {
    "fullname": form.value.fullname,
    "email": form.value.email,
    "username": form.value.username,
    "password": form.value.password,
  }
  this.employee_s.insert(model).subscribe(value => {
    this.message = value; 
   if (this.message == null) {
     this.errorMessage = "Failed! You enterd wrong mail or password format, or user with this email or username alredy exists!";
   } else {
     this.router.navigate(['/login']);
 } });

  }
}
