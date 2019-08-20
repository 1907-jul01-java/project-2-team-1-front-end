import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	message = "";
	answer = sessionStorage.getItem("username");

  constructor(router : Router) { 
	  router.events.forEach((event) => {
		  if(event instanceof RouterEvent){
			  this.message = null;
		  }
	  })
  }

  ngOnInit() {
  }

  logout(){
	sessionStorage.clear();
	this.answer = null;
	this.message = "You have logged out!"
	return this.message
  }
}
