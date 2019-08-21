import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	answer = sessionStorage.getItem("username");

  constructor() { 
  }

  ngOnInit() {
  }

  logout(){
	sessionStorage.clear();
	this.answer = null;
	location.reload();
  }
}
