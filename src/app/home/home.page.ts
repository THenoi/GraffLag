import { IUser } from './home.page';
import { User } from './../../../../GraffLag-BackEnd/GraffLag-BackEnd/server/models/model';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { DatePipe } from '@angular/common';

export interface IUser {
  userid:number,
  login:string,
  password:string,
  email:string,
  gender:string,
  birthdate:Date,
  status:string,
  phone:number
}
  
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  userstatus:boolean;
  userAge:Date;

  title = "GraffLag - Home";
  user:any;
  
  constructor(
    private router: Router,
    private CookieService: CookieService,
  ) {}

  redirectTo(link :any) {
    this.router.navigate(['/'+link]);
  }

  usercookie()
  {
    this.userstatus = true;
    this.user = this.CookieService.get('userdata');
    this.user = JSON.parse(this.user);


      console.log(this.user);
    
    
    // let Data = new Date();
    // let curentdata:any = Data.getFullYear() + '-' + ('0' + (Data.getMonth() + 1)).slice(-2) + '-' + ('0' + Data.getDate()).slice(-2);
    // this.user.birthdate;
    // console.log(this.user.birthdate);

  }

  ngOnInit() {
    
    this.CookieService.get('userdata') ? this.usercookie() : this.userstatus = false;
  }

}
