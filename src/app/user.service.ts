import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './JSON/User';

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private httpClient:HttpClient){}

    getUsers(): Observable<User[]>{
        return this.httpClient.get<User[]>('http://18.191.142.3:8181')
    }
}