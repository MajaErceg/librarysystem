import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Renting } from '../models/renting';
import { RentingService } from '../servicess/renting.service';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.component.html',
  styleUrls: ['./renting.component.css']
})
export class RentingComponent implements OnInit {

  id: number | any;
  renting: Renting[] | any;
  constructor(private rentingService: RentingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.rentingService.getRentingById(this.id).subscribe((data: Renting[]) => {
      console.log(data);
      this.renting = data;
    });
  }
  
  getRentingById() {
    this.rentingService.getRentingById(this.id).subscribe(data => {
      this.renting = data;
    })
  }

  editRenting(rentingId: number) {
    this.router.navigate(['update-renting', rentingId]);
  }

  deleteRenting(membershipNumber: number) {
    this.rentingService.deleteRenting(membershipNumber).subscribe(data => {
      console.log(data)
      this.getRentingById();
    })
  }

}
