import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/servicess/authentication.service';
import { EmployeeLogin, EmployeeService } from 'src/app/servicess/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
    //Form Validables 
    registerForm: FormGroup | any;
    submitted = false;
    message: any;
    errorMessage: String| any;
  
    constructor( private formBuilder: FormBuilder,
      private employee_s:EmployeeService, private router: Router, private authenticationService: AuthenticationService){}

    get f() { return this.registerForm.controls; }
    onSubmit(form: NgForm) {
      var model: EmployeeLogin = {
        "username": form.value.username,
        "password": form.value.password
      } 
      this.employee_s.login(model).subscribe(value => { this.message = value; if(this.message == null){
        this.errorMessage = "Failed! Inccorect password or user doesnt exists!";
        }else{
          localStorage.setItem("username", this.message.username.toString());
          localStorage.setItem("logedin", "true");

          this.authenticationService.logIn();
          this.router.navigate(['/']);
        }
      })
      
      this.submitted = true;
      if (this.registerForm.invalid) {
          return;
      }
      if(this.submitted){
        alert("Great!!");}
     }

      ngOnInit() {
        if(localStorage.getItem("logedin") == "true"){
          this.authenticationService.logOut();
          localStorage.clear();
        }
      }

 

}
