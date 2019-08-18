import { Component, OnInit } from '@angular/core';
import { TopService } from '../top.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	top;

  constructor(private topService : TopService) { }

  ngOnInit() {

	  this.topService.getTop().subscribe((data)=>{
	  console.log(data);
      this.top = data['top'];
    });

  }
  logout(){
    sessionStorage.clear();
  }

}
