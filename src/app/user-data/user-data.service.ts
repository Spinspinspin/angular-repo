import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../User';
import { Http } from '@angular/http';

@Injectable()
export class UserDataService {

  baseUrl = 'http://localhost:4567/api/users'
  options = {withCredentials: true };


  constructor(private http: Http) { }

  signup(firstName: string, lastName: string, email: string, password:string): Observable<User> {
    const payload = { lastName, firstName, email, password };
    return this.http.post(this.baseUrl, payload, this.options)
    .map(response => response.status === 201 ? response.json() : null)
    // .do(user => this.userChanged.next(user))
    // .do(user => this.currentUser = user);
    }

}
