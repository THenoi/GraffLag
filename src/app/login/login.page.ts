
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

  constructor(private router: Router, private LoginService: LoginService) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }

  logIn() {
    debugger
    this.LoginService.login(this.loginForm.value).subscribe((data) => {
      this.userLoginInfo = data,
        console.log('this.userLoginInfo ', this.userLoginInfo)
    })


  }

  ngOnInit() {
  }
}

