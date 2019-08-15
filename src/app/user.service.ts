import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Users } from './JSON/Users';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private httpClient:HttpClient){}

    users:Observable<Users[]>
    getUsers(): Observable<Users[]>{
        return this.httpClient.get<Users[]>('http://18.191.142.3:8181/login')
    }

    postUser(users): Observable<Users[]>{
        return this.httpClient.post<Users[]>('http://18.191.142.3:8181/login', users)
    }

    postUserS(users): Observable<Users[]>{
        return this.httpClient.post<Users[]>('http://18.191.142.3:8181/signup', users)
    }
}