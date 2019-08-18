import { Component, OnInit } from '@angular/core';

//Featured Animes
//
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  template: `<div style="text-align: center"><h1>Welcome to the Anime Interactive Database</h1></div>
  <div><div><a href="http://localhost:4200/login">Login</a></div><div><a href="http://localhost:4200/signup">Sign Up</a><p *ngFor='let u of user || async'>{{u.username}}</p></div></div>
  <div style="text-align: center"><h2>Coming Soon:</h2></div>
  <div><!--Upcoming Animes--></div>
  <div style="text-align: center"><h2>Hot Right Now:</h2></div>
  <div><!--Top Rated Animes--></div>
  <div style="text-align: center"><h2>New Releases:</h2></div>
  <div><!--New Animes--></div>
  <br/><br/><br/><br/><br/><br/><br/><br/>
  <button (click)="logout()" style="text-align: center">Logout</button>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
  }

}
