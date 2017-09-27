import { Component, OnInit } from '@angular/core';

import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
  
    apartments: Apartment[];
    error: string;
    selectedApartment: Apartment;
    
  
    constructor(private data: ApartmentDataService) { }
  
    selectApartment(apartment: Apartment) {
      this.selectedApartment = apartment;
    }
  
    hideApartment(apartment: Apartment){
      this.selectedApartment = null;
      
    }
  
    ngOnInit() {
      this.data.getMyListings()
      .subscribe(
        apartments => this.apartments = apartments,
        () => this.error = 'Could not load apartment data'
      );
    }
  
  }
