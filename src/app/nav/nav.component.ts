import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	message = "";
	answer = sessionStorage.getItem("username");

  constructor() { }

  ngOnInit() {
  }

  erase(){
	  this.message = "";
  }

  logout(){
	sessionStorage.clear();
	this.answer = null;
	this.message = "You have logged out!"
	return this.message
  }
}
