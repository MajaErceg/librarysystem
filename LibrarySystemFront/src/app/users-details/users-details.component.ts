import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../models/users';
import { UsersService } from '../servicess/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  membershipNumber: number | any;
  users: Users | any;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit(): void {
    this.membershipNumber = this.route.snapshot.params['id'];

    this.users = new Users();
    this.usersService.getUsersById(this.membershipNumber).subscribe(data => {
      this.users = data;
    })
  }

}
