import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './shared/user';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  _url = 'http://localhost:8080/email';
  constructor(private _http: HttpClient) { }

  email(user: User) {
    return this._http.post<any>(this._url, user);
  }

}
