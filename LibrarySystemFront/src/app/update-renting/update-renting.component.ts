import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Renting } from '../models/renting';
import { RentingService } from '../servicess/renting.service';

@Component({
  selector: 'app-update-renting',
  templateUrl: './update-renting.component.html',
  styleUrls: ['./update-renting.component.css']
})
export class UpdateRentingComponent implements OnInit {

  id: number | any;
  renting: Renting = new Renting();

  constructor(private rentingService: RentingService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    /* this.id = this.route.snapshot.params['id'];
    
    this.rentingtService.getRentingtById(this.id).subscribe(data=> {
      this.renting = data;
    }, error => console.log(error));*/
  }

  onSubmit() {
    this.rentingService.updateRenting(this.renting).subscribe(data => {
    this.goToRentingList();
    },
    error => console.log(error));
  }

  goToRentingList() {
    this.router.navigate(['/renting']);
  }

}
