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

  description: string;
  rating: number;
 username :string;
 animename: string;
  global_array=new Array();

  constructor(public sessionService: SessionService) {
      
    
     this.username=sessionService.getUsername();

   }

   search(){

    

    
    var theUrl = 'https://api.jikan.moe/v3/search/anime?q='+this.target+'&limit=1';

    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    var obj = JSON.parse(xmlHttp.responseText);
    
    this.img_url= JSON.stringify(obj.results[0]['image_url']);
    this.img_url=this.img_url.replace(/['"]+/g, '')

    this.url= JSON.stringify(obj.results[0]['url']);
    this.url=this.url.replace(/['"]+/g, '')

    this.animename= JSON.stringify(obj.results[0]['title']);
    this.animename=this.url.replace(/['"]+/g, '')
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

                                
        
  }


  test(){
    this.rating=1;
    this.description='its really good';
    this.animename='https://myanimelist.net/anime/1/Cowboy_Bebop';
    this.username='marc';

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
    xhttp.send('https://myanimelist.net/anime/1/Cowboy_Bebop');

    console.log(xhttp);
  


  }

}
