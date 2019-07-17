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


  userLoginInfo: IUser;

  personalSettingsParams = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl('')
  });

  constructor(private router: Router, private LoginService: LoginService,private cookieService: CookieService ) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }
  userCookie() // get all user data from cookie
  {
    this.userLoginInfo = JSON.parse(this.cookieService.get('userdata'));
  }

  personalSettingsClear()
  {

  }

  personalSettingsSave()
  {
    console.log('click save');
    
    if(this.personalSettingsParams.value.username != null)
    {
       this.personalSettingsParams.value.username != null? console.log( this.personalSettingsParams.value.username):console.log('username empty');
    }
    else if(this.personalSettingsParams.value.password != null)
    {
      this.personalSettingsParams.value.password != null? console.log( this.personalSettingsParams.value.password):console.log('password empty');
    }
    else if( this.personalSettingsParams.value.email != null)
    {
      this.personalSettingsParams.value.email != null? console.log( this.personalSettingsParams.value.email):console.log('email empty');
    }
    else if(this.personalSettingsParams.value.settings != null)
    {
      this.personalSettingsParams.value.birthdate != null? console.log( this.personalSettingsParams.value.birthdate):console.log('birthdate empty');
    }  

  }




  
  ngOnInit() {
    this.userCookie()
  }

}
