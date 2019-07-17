import { IUser } from './../interfaces/IUser';
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

  userLoginInfo: IUser;
  status:string;

  loginForm = new FormGroup({
    username: new FormControl(''),
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
        userInfo = this.userLoginInfo;
        
        this.userLoginInfo ? this.cookieService.set('userdata', JSON.stringify(userInfo)) :"";
        this.cookieService.get('userdata') ? this.redirectTo('home'): this.status = "Wrong Username or Password"
    })


  }

  ngOnInit() {
    this.cookieService.get('userdata')? this.redirectTo('home'): ''; 
  }
}

