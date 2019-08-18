import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  public Search(mal_id) {
    return this.http.get(`https://api.jikan.moe/v3/anime/${mal_id}`);
  }
  
}