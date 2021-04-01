import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  loginAttempt(user): void {
    this.httpClient.post<any>(URL.auth, JSON.stringify(user)).subscribe(el => el);
  }
}
// , {
//   headers: {Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiJ9.3tm1LU8zBo3-IxzmiwqsSH2ZI6Gh8Jifa0F8QCWqPxppHzjMwFgwuBgy0sdXF2ogzAx6RsrCeboheR5UnWZGHA'} }
