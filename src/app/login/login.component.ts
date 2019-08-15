
import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
import {Inject} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public sessionService: SessionService) {
    this.sessionService.setToken('testing new folder');
   }

  ngOnInit() {

  }

}
