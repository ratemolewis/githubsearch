import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
import{UserService} from '../service/user.service'



@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
userprofile:any[];
repositories:any[];
username:string;
  constructor(private userService:UserService) {

  }
  serachUser(){
    this.userService.updateServiceInfo(this.username)
    this.userService.searchUser().subscribe(userprofile=>{
      console.log(userprofile);
      this.userprofile=userprofile;
    })
    this.userService.getRepos().subscribe(repositories=>{
      console.log(repositories)
      this.repositories=repositories;
    });
  }
  ngOnInit() {

  }



}
