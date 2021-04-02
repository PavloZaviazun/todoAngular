import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {URL} from '../config';
import {log} from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  mystorage = window.localStorage;
  constructor(private httpClient: HttpClient) { }

  loginAttempt(user): void {
    const her = this.httpClient.post(URL.auth, JSON.stringify(user), {observe : 'response'}).subscribe(el => {
      console.log(el);
      this.mystorage.setItem('token', el.headers.get('Authorization'));
    });
  }

  // loginAttempt(user): void {
  //   const her = this.httpClient.post('http://localhost:8080/register', user, {observe : 'response'}).subscribe(el => {
  //     console.log(el);
  //   });
  // }
}
// , {
//   headers: {Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiJ9.3tm1LU8zBo3-IxzmiwqsSH2ZI6Gh8Jifa0F8QCWqPxppHzjMwFgwuBgy0sdXF2ogzAx6RsrCeboheR5UnWZGHA'} }
