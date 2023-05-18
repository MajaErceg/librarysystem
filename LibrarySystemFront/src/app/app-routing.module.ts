import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CreateRentingComponent } from './create-renting/create-renting.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { HomeComponent } from './home/home.component';
import { RentingDetailsComponent } from './renting-details/renting-details.component';
import { RentingComponent } from './renting/renting.component';
import { UpdateUsersComponent } from './update-users/update-users.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  //CRUD operations
  { path: 'users', component: UsersComponent},
  { path: 'add-users', component: CreateUsersComponent },
  { path: 'update-users/:id', component: UpdateUsersComponent }, 
  { path: 'renting/:id', component: RentingComponent },
  { path: 'renting-details/:id', component: RentingDetailsComponent },
  { path: 'add-books/:id', component: CreateRentingComponent },
  //{ path: 'update-renting/:id', component: UpdateRentingComponent },
  { path: 'users-details/:id', component: UsersDetailsComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, RentingComponent]
