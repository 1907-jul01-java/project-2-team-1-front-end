import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private httpClient:HttpClient){}
    reponse: HttpHeaderResponse;
    router: Router;

    postUser(users: {}){
        return this.httpClient.post('http://18.191.142.3:8181/login', users);
    }

    postUserS(users: {}){
        return this.httpClient.post('http://18.191.142.3:8181/login/newUser', users)
    }

}