import { Component, OnInit } from '@angular/core';

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

  global_array=new Array();

  constructor() {
      
    
    

   }

   search(){

    console.log(this.target);

    
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
   }

  ngOnInit() {
  }

  postReview() {

    var xhttp = new XMLHttpRequest();
    var text ='testing';
    var yourArray=this.global_array;

    console.log(yourArray);
    this.response=yourArray[0];
    yourArray[1]=this.sessionService;

    xhttp.onreadystatechange =function(this) {
      if (this.readyState === 4 && this.status === 200) {

        console.log('-------' + this.responseText);


        yourArray[0]=(this.responseText);
        console.log(yourArray[0]);


        yourArray[1].setToken(this.responseText);



      }
    }
    //live
    xhttp.open('POST', 'http://18.191.142.3:8181/login/newUser', true);
    //xhttp.setRequestHeader('Content-Type', 'multipart/form-data'); //500 insertal server error
    //xhttp.setRequestHeader('Content-Type', 'text/html; charset=utf-8');//415 unsupported media type
    //xhttp.setRequestHeader('Content-Type', 'multipart/form-data; boundary=something'); //415 unsupported media type

    //xhttp.setRequestHeader('Content-Type', 'application/javascript');
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8'); //400 basrequest

    xhttp.withCredentials = false;
    xhttp.send(JSON.stringify({
                          "rating": 4,
                           "description": "melcher",
                           "username": "hardcoded",
                           "animename": "melcher"
                          }));

                          
  console.log(xhttp);
  }


}
