import { IUser } from './../home/home.page';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from './../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface User {
  userid: number,
  login: string,
  password: string,
  email: string,
  gender: string,
  birthdate: Date,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  userLoginInfo: {};

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router, private LoginService: LoginService,private cookieService: CookieService ) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }

  logIn() {
    
    let  userInfo : IUser;
    this.LoginService.login(this.loginForm.value).subscribe((data) => {
      this.userLoginInfo = data,
        userInfo = this.userLoginInfo[0];
        
        this.userLoginInfo[0] ? this.cookieService.set('userdata', JSON.stringify(userInfo)) :"";
        this.cookieService.get('userdata') ? this.redirectTo('home'): ""
    })


  }

  ngOnInit() {
    this.cookieService.get('userdata')? this.redirectTo('home'): ''; 
  }
}

