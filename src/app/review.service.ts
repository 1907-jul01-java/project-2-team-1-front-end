import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from './JSON/Review';
import { Anime } from './JSON/Anime'

@Injectable({
    providedIn: 'root'
})
export class ReviewService{
    constructor(private httpClient:HttpClient){}

    review:Observable<Review[]>
    anime:Observable<Anime[]>
    getReviews(anime): Observable<Anime[]>{
        return this.httpClient.post<Anime[]>('http://18.191.142.3:8181/reviews/getReviews', anime)
    }

    postReview(review): Observable<Review[]>{
        return this.httpClient.post<Review[]>('http://18.191.142.3:8181/reviews', review)
    }
}