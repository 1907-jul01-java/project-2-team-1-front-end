import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../JSON/Users';

//Stretch Goal: Dynamic Username
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  template: `<div style="text-align: center"><p>Username:</p>
  <input #username placeholder="username"><br/>
  <p>Password:</p>
  <input #password placeholder="password" type="password"><br/><br/>
  <button (click)="signup(username.value, password.value)">Sign Up</button>
  </div>`,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit() {
  }
  username: string;
  password: string;

  users;
  

  signup(username, password){
    this.username = username.valueOf();
    this.password = password.valueOf();
    this.users = {username: this.username,
      password: this.password};
    this.userService.postUserS((this.users));
    console.log(JSON.stringify(this.users));
    
  }
}
