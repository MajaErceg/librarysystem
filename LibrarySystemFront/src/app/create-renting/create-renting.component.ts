import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Renting } from '../models/renting';
import { RentingService } from '../servicess/renting.service';

@Component({
  selector: 'app-create-renting',
  templateUrl: './create-renting.component.html',
  styleUrls: ['./create-renting.component.css']
})
export class CreateRentingComponent implements OnInit {

  id: number | undefined;
  renting: Renting = new Renting();

  constructor(private rentingService: RentingService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.renting.membershipNumber = this.id;
  }

  saveRenting() {
    this.rentingService.createRenting(this.renting).subscribe(data => {
      console.log(data);
      //this.goToEmployeeList();
      this.router.navigate(['users']);
    }),
      (error: any) => console.log(error);
  }  

  onSubmit() {
    this.saveRenting();
  }

}
