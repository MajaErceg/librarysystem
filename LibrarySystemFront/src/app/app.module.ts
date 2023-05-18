import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UsersComponent } from './users/users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { RentingComponent } from './renting/renting.component';
import { CreateRentingComponent } from './create-renting/create-renting.component';
import { UpdateRentingComponent } from './update-renting/update-renting.component';
import { RentingDetailsComponent } from './renting-details/renting-details.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { UsersService } from './servicess/users.service';
import { RentingService } from './servicess/renting.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UpdateUsersComponent,
    UsersDetailsComponent,
    CreateUsersComponent,
    RentingComponent,
    CreateRentingComponent,
    UpdateRentingComponent,
    RentingDetailsComponent


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [ 
     RentingService,
     UsersService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
