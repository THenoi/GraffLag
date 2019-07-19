import { AlertController } from '@ionic/angular';
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

  constructor(private AlertController: AlertController, private router: Router, private LoginService: LoginService, private cookieService: CookieService, private SettingsService: SettingsService) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }
  userCookie() // get all user data from cookie
  {
    this.userLoginInfo = JSON.parse(this.cookieService.get('userdata'));
  }

  publicSettingsApply() {

    var currentData: { [k: string]: any } = {};
    currentData.userid = this.userLoginInfo.userid;
    currentData.phone = this.userLoginInfo.phone;
    currentData.nickname = this.userSettings.nickname != "" ? this.userSettings.nickname : null;
    currentData.status = this.userSettings.status != "" ? this.userSettings.status : null

    console.log(currentData);

    this.SettingsService.publicSettings(currentData).subscribe((data) => { this.alertWhenDataHasBeenChanged() });

  }
  async alertWhenDataHasBeenChanged() {
    const alert = await this.AlertController.create({
      header: 'GraffLag - Settings',
      subHeader: "Attention",
      translucent: true,
      backdropDismiss: true,

      message: '<br><strong><i>Hei your data successful has been changed, like your data will work right, we recommend to re login in system</i></strong>',
      buttons: [
        {
          text: 'Remain on Page',

          handler: () => {

          }
        },
        {
          text: 'Leave Now',

          handler: () => {
            this.cookieService.delete('userdata');
            this.cookieService.deleteAll('userdata');
            this.redirectTo('login');
          }
        },

      ]
    });
    alert.present()

  }

  personalSettingsApply() {


    var currentData: { [k: string]: any } = {};
    currentData.userid = this.userLoginInfo.userid;
    currentData.phone = this.userLoginInfo.phone;
    currentData.username = this.userSettings.username != "" ? this.userSettings.username : null;
    currentData.password = this.userSettings.password != "" ? this.userSettings.password : null
    currentData.email = this.userSettings.email != "" ? this.userLoginInfo.email : null;
    console.log(currentData);


    this.SettingsService.personalSettings(currentData).subscribe((data) => console.log(data));
  }





  ngOnInit() {
    this.userCookie()
  }

}
