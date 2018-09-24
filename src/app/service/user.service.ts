import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import{environment} from '../../environments/environment'
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {
username:string;

    constructor(private http:Http) {
  console.log("service is working");
  this.username='ratemolewis';
    }
    searchUser(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + environment.clientID + "&client_secret=" + environment.clientSecret).map(res=>
      res.json());
    }

    getRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + environment.clientID + "&client_secret=" + environment.clientSecret).map(res=>
      res.json());
    }
    updateServiceInfo(username:string){
      this.username=username;
    }
}
