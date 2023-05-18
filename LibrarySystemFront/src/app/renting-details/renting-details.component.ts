import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Renting } from '../models/renting';
import { RentingService } from '../servicess/renting.service';

@Component({
  selector: 'app-renting-details',
  templateUrl: './renting-details.component.html',
  styleUrls: ['./renting-details.component.css']
})
export class RentingDetailsComponent implements OnInit {

  id: number | any;
  renting: Renting[] | any;
  
  constructor(private route: ActivatedRoute, private rentingService: RentingService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //this.renting = new Renting();
    this.rentingService.getRentingById(this.id).subscribe(data => {
      this.renting = data;
    })
  }

}
