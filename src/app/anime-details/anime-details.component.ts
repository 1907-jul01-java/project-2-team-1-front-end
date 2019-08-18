import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {HttpHeaders} from '@angular/common/http'

import { Anime } from '../anime';
import { SearchService }  from '../search.service';

@Component({
  selector: 'app-anime-details',
  templateUrl: './anime-details.component.html',
  styleUrls: ['./anime-details.component.css']
})
export class AnimeDetailsComponent implements OnInit {
	search;
	responses : any;
	check;
	answer = sessionStorage.getItem("username");
	thing = "hello";
	hero = {
		
	}
	 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
	
  constructor(private http: HttpClient, private route: ActivatedRoute, private searchService: SearchService, private location: Location) { }

  ngOnInit(): void {
	  this.getSearch();
	  
  }

  getSearch(){
	  const mal_id = this.route.snapshot.paramMap.get('mal_id');
	  this.searchService.Search(mal_id)
	  .subscribe((data) => {
		  console.log(data);
      this.search = data;
	  });
  }

  showReviews() {
	  this.http.post('http://18.191.142.3:8181/reviews/getReviews', this.search.title)
      .subscribe((data) => {
          this.responses = data;
		  console.log(this.responses)
		  return this.responses;
	  });
  }

  onSubmit(f: NgForm) {  
	  this.http.post('http://18.191.142.3:8181/reviews', {"rating": 4, "description": f.value.description, "username": this.answer, "animename": this.search.title}, this.httpOptions)
	 .subscribe((data) => {
          this.check = data;
		  console.log(this.check)
		  return this.check;
	  }); 
	  console.log(f.value.description, this.search.title, this.answer);
  }

  goBack(): void {
  this.location.back();
}


}
