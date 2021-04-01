import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }
  username = new FormControl('');
  password = new FormControl('');
  formLogin = new FormGroup({
    username: this.username,
    password: this.password
  });
  ngOnInit(): void {
  }

  sendData(): void {
    const formData = new FormData();
    const name = this.formLogin.get('username').value;
    const pass = this.formLogin.get('password').value;
    const user = {username: name, password: pass};
    this.authService.loginAttempt(user);
  }
}
