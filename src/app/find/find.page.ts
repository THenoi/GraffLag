
import { user } from './../../../../GraffLag-BackEnd/GraffLag-BackEnd/server/models/userModel';
import { FindService } from './../services/find.service';


import { IUser } from './../interfaces/IUser';

import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-find',
  templateUrl: './find.page.html',
  styleUrls: ['./find.page.scss'],
})
export class FindPage implements OnInit {

  profiles:IUser;
  user:IUser;
  SearchBarData:string = "";
  constructor(private router: Router,
    private CookieService: CookieService,
    private FindService:FindService,
   ) { }

    
  redirectTo(link: any) { //+
    this.router.navigate(['/' + link]);
  }
  redirectToProfile(profileid: any) { //+
    this.router.navigate(['/profile/'+profileid]);
  }

  getUserData() { // +
    this.user = JSON.parse(this.CookieService.get('userdata'));
  }

  getAllProfiles()
  {

    
    
   this.FindService.getAllProfiles(this.user.userid).subscribe((data) => 
   {
     this.profiles = data;
    
   })
  }
  ngOnInit() {
    this.getUserData();
    this.getAllProfiles();
  }

}
