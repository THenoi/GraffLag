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
  nickname:string;
  status:string;

  userLoginInfo: IUser;

  constructor(private router: Router, private LoginService: LoginService,private cookieService: CookieService ) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }
  userCookie() // get all user data from cookie
  {
    this.userLoginInfo = JSON.parse(this.cookieService.get('userdata'));
  }


  PublicSeting()
  {
    
     this.nickname || this.status !=null ? this.applyPublicSeting()
     :console.log("public settings are empty");
  }
  applyPublicSeting(){
    return console.log("public settings exist")
  }



  
  ngOnInit() {
    this.userCookie()
  }

}
