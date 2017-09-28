import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';

@Component({
  selector: 'app-apartment-detail',
  templateUrl: './apartment-detail.component.html',
  styleUrls: ['./apartment-detail.component.css']
})
export class ApartmentDetailComponent implements OnInit {

@Input()
apartment: Apartment;
error: string;
message: string;

  constructor(private data: ApartmentDataService) { }

  activateListing(apartment: Apartment) {
    this.data.activate(this.apartment).subscribe( 
      apartments => {
        console.log('apartment', this.apartment);
        this.apartment.is_active = true;
      },
      e => this.message = 'RUH ROH! ' + e
    );
  }

  deactivateListing(apartment: Apartment) {
    this.data.deactivate(this.apartment).subscribe( 
      apartments => {
        console.log('apartment', this.apartment);
        this.apartment.is_active = false;
      },
      e => this.message = 'RUH ROH! ' + e
    );
  }

  likeListing(apartment: Apartment) {
    this.data.like(this.apartment).subscribe( 
      apartments => {
        this.apartment.is_active = false;
      },
    e => this.message = 'RUH ROH! ' + e
  );
  }

  ngOnInit() {
  }

}
