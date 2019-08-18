import { Component, OnInit } from '@angular/core';
import {SessionService} from '../session.service';
@Component({
  selector: 'app-biglist',
  templateUrl: './biglist.component.html',
  styleUrls: ['./biglist.component.css']
})
export class BiglistComponent implements OnInit {
  img_url=''
   biglist='';
   url='';

  target='';

  hide = document.querySelector("#hide");

  description: string;
  rating: number;
 username :string;
 animename: string;
 synopsis: string;
  global_array=new Array();
  simple = "0"

  constructor(public sessionService: SessionService) {
      
    this.username = sessionStorage.getItem("username");

   }

   search(){

    
	this.simple = "100"
	
    var theUrl = 'https://api.jikan.moe/v3/search/anime?q='+this.target+'&limit=1';
console.log(theUrl);
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var obj = JSON.parse(xmlHttp.responseText);
    
    this.img_url= JSON.stringify(obj.results[0]['image_url']);
    this.img_url=this.img_url.replace(/['"]+/g, '')

    this.url= JSON.stringify(obj.results[0]['mal_id']);
    this.url=this.url.replace(/['"]+/g, '')

    this.animename= JSON.stringify(obj.results[0]['title']);
    this.animename=this.animename.replace(/['"]+/g, '')

    this.synopsis= JSON.stringify(obj.results[0]['synopsis']);
    this.synopsis=this.synopsis.replace(/['"\ ]+/g, '')

    console.log(this.animename);
    
   }

  ngOnInit() {
  }

  postReview() {

          var xhttp = new XMLHttpRequest();
          var text ='testing';
          var yourArray=this.global_array;

          xhttp.onreadystatechange =function(this) {
            if (this.readyState === 4 && this.status === 200) {

              
            }
          }
          //live
          xhttp.open('POST', 'http://18.191.142.3:8181/reviews', true);
          //xhttp.setRequestHeader('Content-Type', 'multipart/form-data'); //500 insertal server error
          //xhttp.setRequestHeader('Content-Type', 'text/html; charset=utf-8');//415 unsupported media type
          //xhttp.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something'); //415 unsupported media type
          //xhttp.setRequestHeader('Content-Type', 'application/javascript');
          xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //400 basrequest

          xhttp.withCredentials = false;
          xhttp.send(JSON.stringify({
                                "rating": this.rating,
                                "description": this.description,
                                "username": this.username,
                                "animename": this.animename
                                }));


                           console.log(     JSON.stringify({
                                  "rating": this.rating,
                                  "description": this.description,
                                  "username": this.username,
                                  "animename": this.animename
                                  }));

                                
        
  }


  test(){
   
this.rating,
this.description,
this.username,
this.animename;
console.log(JSON.stringify({
  "rating": this.rating,
  "description": this.description,
  "username": this.username,
  "animename": this.animename
  }));             
    this.getReviews();
  }


  getReviews(){
    this.animename;
    //http://18.191.142.3:8181/reviews/getReviews
    //raw = trigun or  https://myanimelist.net/anime/1/Cowboy_Bebop

    var xhttp = new XMLHttpRequest();
    var text ='testing';
    var yourArray=this.global_array;

    xhttp.onreadystatechange =function(this) {
      if (this.readyState === 4 && this.status === 200) {

        console.log('-------' + this.responseText);

        yourArray[0]=(this.responseText);

      }
    }
    //live
    xhttp.open('POST', 'http://18.191.142.3:8181/reviews/getReviews', true);
    //xhttp.setRequestHeader('Content-Type', 'multipart/form-data'); //500 insertal server error
    xhttp.setRequestHeader('Content-Type', 'text/html; charset=utf-8');//415 unsupported media type
    //xhttp.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something'); //415 unsupported media type
    //xhttp.setRequestHeader('Content-Type', 'application/javascript');
    //xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //400 basrequest

    xhttp.withCredentials = false;
    xhttp.send(this.animename);
    console.log(this.animename);
    console.log(xhttp);
  
    

  }

}