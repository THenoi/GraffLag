import { SettingsService } from './../services/settings.service';
import { IUser } from './../interfaces/IUser';
import { CookieService } from 'ngx-cookie-service';

import { LoginService } from './../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  userSettings: IUser = {
    username: null,
    password: null,
    email: null,
    birthdate: null,
    phone: null,
    nickname: null,
    status: null,

  }
  userLoginInfo: IUser;


  constructor(private router: Router, private LoginService: LoginService, private cookieService: CookieService, private SettingsService: SettingsService) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }
  userCookie() // get all user data from cookie
  {
    this.userLoginInfo = JSON.parse(this.cookieService.get('userdata'));
  }

  publicSettingsApply() {

    let currentData = {
      userid: this.userLoginInfo.userid,
      phone: this.userLoginInfo.phone,
      nickname: this.userSettings.nickname,
      status: this.userSettings.status,

    }

    console.log(currentData);

    this.SettingsService.publicSettings(currentData).subscribe((data) => console.log(data));

  }
  personalSettingsApply() {
      let currentData = {
      userid: this.userLoginInfo.userid,
      phone: this.userLoginInfo.phone,
      username: this.userSettings.username,
      password: this.userSettings.password,
      email: this.userSettings.email,
      birthdate: this.userSettings.birthdate,

    }

    this.SettingsService.personalSettings(currentData).subscribe((data) => console.log(data));
  }





  ngOnInit() {
    this.userCookie()
  }

}
