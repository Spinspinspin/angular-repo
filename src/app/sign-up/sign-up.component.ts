import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../User';
import { UserDataService } from '../user-data/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private first_name: string;
  private last_name: string;
  private email: string;
  private password: string;
  private message: string;


  constructor(private data: UserDataService, private router: Router) { }


  submitSignup() {
    this.data.signup(this.first_name, this.last_name, this.email, this.password).subscribe( 
      user => {
        if (user) {
          this.router.navigate(['/apartments/mine']);
      this.message = 'HORRAY! You signed up. Your name is ' + user.first_name;
    } else {
      this.message = 'Could not sign up with those credentals.';
    }
  },
    e => this.message = 'RUH ROH! ' + e
  );
  }

  ngOnInit() {
  }

}
