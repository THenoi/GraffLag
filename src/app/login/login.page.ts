import { Subscriber } from 'rxjs';
import { LoginService } from './../services/login.service';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { async } from 'q';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public userLogin: string;
  public userPassword: string;
  public error: string = "";

  redirectTo(link: any) {
    this.router.navigate(['/' + link]);

  }

  logIn() {

    if (this.userLogin == null) {
      this.error = "Login are Empty";
    }
    else {

      if (this.userPassword == null) {
        this.error = "Password are Empty";

      }
      else {

        interface IUser {
          userid:string,
          login: string,
          password: string,
          email:string,
          gender:string,
          birthdate:string,
        }
        let userLoginInfo:IUser

         this.LoginService.login(this.userLogin, this.userPassword).subscribe(data => {
          userLoginInfo  = data[0]; console.log(JSON.stringify(data[0]));
        });

        console.log( userLoginInfo);

        if (userLoginInfo != null) {
          this.error = "Welcome Back" + userLoginInfo;
        }
        else {
          this.error = "This User Not Exist Try Again";
        }
      }
    }

  }

  constructor(private router: Router, private LoginService: LoginService) { }

  ngOnInit() {
  }



}

