
import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {SessionService} from '../session.service';
import {Inject} from '@angular/core';
=======
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Users } from '../JSON/Users';
import { stringify } from 'querystring';
>>>>>>> origin/Kelly

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor(public sessionService: SessionService) {
    this.sessionService.setToken('testing new folder');
   }

  ngOnInit() {

=======
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
>>>>>>> origin/Kelly
  }

}
