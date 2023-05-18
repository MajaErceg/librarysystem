import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../servicess/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: Users[] | any ;
  
  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((data: Users[]) => {
      console.log(data);
      this.users = data;
    });
  }

  getUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  viewUsers(membershipNumber: number) {
    this.router.navigate(['users-details', membershipNumber]);
    // treba mi ruta za user detalje
  }

  editUsers(usersID: number) {
    this.router.navigate(['update-users', usersID]);
    // treba mi ruta za user update
  }

  deleteUsers(membershipNumber: number) {
    this.usersService.deleteUsers(membershipNumber).subscribe(data => {
      console.log(data)
      this.getUsers();
    })
  }

 addBooks(membershipNumber: number) {
    this.router.navigate(['add-books', membershipNumber]);
    // treba mi ruta za dodavanje knjiga u renting
  }

  history(membershipNumber: number) {
    this.router.navigate(['renting', membershipNumber]);
    // treba mi ruta za renting
  }

}
