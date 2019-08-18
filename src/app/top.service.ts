import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopService {
	top;

  constructor(private http: HttpClient) { }

  public getTop() {
    return this.http.get(`https://api.jikan.moe/v3/top/anime/1/tv`);
  }
}
