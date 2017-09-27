import { Component, OnInit } from '@angular/core';
import { SessionDataService } from '../session-data/session-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  private message: string;

  constructor(private data: SessionDataService, private router: Router) { }

  submitLogin() {
    this.data.login(this.email, this.password).subscribe( 
      user => {
        if (user) {
          this.router.navigate(['/apartments/mine']);
      this.message = 'HORRAY! Your name is ' + user.first_name;
    } else {
      this.message = 'Could not log in with those credentals.';
    }
  },
    e => this.message = 'RUH ROH! ' + e
  );
  }


  ngOnInit() {
  }

}
