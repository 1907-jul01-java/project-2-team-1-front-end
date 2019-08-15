
import { Component, OnInit } from '@angular/core';

import {SessionService} from '../session.service';
import {Inject} from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Users } from '../JSON/Users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: `<div style="text-align: center">
  <p>Username:</p><input #uname placeholder="username">
  <p>Password:</p><input type="password" #pass placeholder="super secret password"><br/><br/>
  <button (click)="login(uname.value, pass.value)">Login</button>
  </div>
  <p *ngFor="let u of user | async" style="text-align: center">
      {{u.username}}
  </p>
  <p style="text-align: center">Hello there</p>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Observable<Users[]>
  users;
  username: string;
  password: string;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getUsers();
  }

  login(uname, pass){
    this.username = uname.valueOf();
    this.password = pass.valueOf();
    this.users = {username: this.username, password: this.password}
    this.userService.postUser(this.users);
  }

}
