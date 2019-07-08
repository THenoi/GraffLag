import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';




@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
 
  constructor( private router: Router,private http: Http) { }


  public userEmail: string
  public error: string = "";

  redirectTo(link :any) {
    this.router.navigate(['/'+link]);
  }

  

  forgot()
 {

     console.log(this.userEmail); 
  }

  
  

  ngOnInit() {
  }

  
}
