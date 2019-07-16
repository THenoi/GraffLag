import { CookieService } from 'ngx-cookie-service';
import { IUser } from './../interfaces/IUser';
import { RegisterService } from './../services/register.service';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [DatePipe]
})



export class RegisterPage implements OnInit {

  userRegisterInfo: IUser;
  status:string;
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    password2: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    birthdate: new FormControl(''),
    phone: new FormControl(''),
    nickname: new FormControl(''),
  });


  constructor(private router: Router, private http: Http, private RegisterService: RegisterService, private datePipe: DatePipe,private CookieService:CookieService) { }

  redirectTo(link: any) {
    this.router.navigate(['/' + link]);
  }


  registerUser() {

   if(this.registerForm.value.password == this.registerForm.value.password2)
   {
     this.RegisterService.register(this.registerForm.value).subscribe((data) => {
           // [0] = data what we received from db after registration
           // [1] = get true or false if user are registered or not
      this.userRegisterInfo[0] = data, 
         this.userRegisterInfo[1] ? this.regDataToCookie(): this.status = "This user alredy exist try another";
    })
  }
  else
  {
    this.status = "Password Don't Match";
  }
}
  

  regDataToCookie () { //received data insert into cookie
    this.CookieService.set('userdata', JSON.stringify(this.userRegisterInfo));
    this.redirectTo('home')
  }

  ngOnInit() {

  }


}
