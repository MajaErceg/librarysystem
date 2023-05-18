import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../servicess/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  users: Users = new Users();

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUsers() {
    this.usersService.createUsers(this.users).subscribe(data => {
      console.log(data);
     // this.goToUsersList();
      this.router.navigate(['users']); //ruta za users e
    }),
      (    error: any) => console.log(error);
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    console.log(this.users)
    this.saveUsers();
  }


}
