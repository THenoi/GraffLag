import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  public userLogin: string;
  public userPassword: string;
  
  redirectTo(link :any) {
    this.router.navigate(['/'+link]);
    
  }

  logIn()
  {
    
     console.log(this.userLogin+ " " + this.userPassword); 
 
  }
  
  constructor( private router: Router,private http: Http) { }
  
  ngOnInit() {
    
  }



}

