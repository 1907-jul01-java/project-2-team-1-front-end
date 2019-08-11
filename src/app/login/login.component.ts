import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../JSON/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:Observable<User[]>
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
