import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../servicess/users.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  id: number | any;
  users: Users = new Users();

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.usersService.getUsersById(this.id).subscribe(data=> {
      this.users = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.usersService.updateUsers(this.users).subscribe(data => {
    this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList() {
    this.router.navigate(['/users']);
  }

}
