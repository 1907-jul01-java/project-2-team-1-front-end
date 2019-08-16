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
  constructor() {
      var theUrl = 'https://api.jikan.moe/v3/search/anime?q=Cowboy&Bebop&limit=1';

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

}
