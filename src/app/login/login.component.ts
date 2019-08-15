import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Users } from '../JSON/Users';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  user:Observable<Users[]>
  users:Observable<Users[]>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  login(){
    this.user = this.userService.postUser(this.username);
    {{this.username}}
  }

}
