import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from './JSON/Review';

@Injectable({
    providedIn: 'root'
})
export class ReviewService{
    constructor(private httpClient:HttpClient){}

    getUsers(): Observable<Review[]>{
        return this.httpClient.get<Review[]>('http://localhost:8181/reviews')
    }
}