import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template: `<div style="text-align: center">
  <p>Username:</p><input #username placeholder="username">
  <p>Password:</p><input type="password" #password placeholder="super secret password"><br/><br/>
  <button (click)="login(username.value, password.value)">Login</button>
  </div>
  <p style="text-align: center">Hello there</p>
  `,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: Router;
  response: HttpHeaderResponse;
  users;
  username: string;
  password: string;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  login(username, password){
    this.username = username.valueOf();
    this.password = password.valueOf();
    this.users = {username: this.username, password: this.password};
    this.userService.postUser(this.users);
    console.log(JSON.stringify(this.users));
    window.location.assign("http://localhost:4200")
  }

}
