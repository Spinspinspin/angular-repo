import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from '../apartment';
import { ApartmentDataService } from '../apartment-data/apartment-data.service';
import { User } from '../User';
import { SessionDataService } from '../session-data/session-data.service';

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
currentUser = new User();


  constructor(private data: ApartmentDataService, private service: SessionDataService) { }

  getCurrentUser(){
    return this.currentUser = this.service.getCurrentUser();
  }

get userIsOwner() {
  return this.getCurrentUser() && this.getCurrentUser().id === this.apartment.user_id;
}

  activateListing(apartment: Apartment) {
    this.data.activate(this.apartment).subscribe( 
      apartments => {
        
        this.apartment.is_active = true;
      },
      e => this.message = 'RUH ROH! ' + e
    );
  }

  deactivateListing(apartment: Apartment) {
    this.data.deactivate(this.apartment).subscribe( 
      apartments => {
        
        this.apartment.is_active = false;
      },
      e => this.message = 'RUH ROH! ' + e
    );
  }

  likeListing(currentUser: User) {
    this.data.like(this.apartment).subscribe( 
      apartments => {
        console.log("yeah boy", this.currentUser.first_name)
        this.apartment.liked = true;
      },
    e => this.message = 'RUH ROH! ' + e
  );
  }



  ngOnInit() {
    
  }

}
