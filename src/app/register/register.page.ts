import { RegisterService } from './../services/register.service';
import { FormsModule, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})



export class RegisterPage implements OnInit {

  userRegisterInfo:{}[];
  registerForm = new FormGroup({
    reglogin: new FormControl(''),
    regpas: new FormControl(''),
    regpasg: new FormControl(''),
    regemail: new FormControl(''),
    reggender: new FormControl(''),
    regbirthdata: new FormControl(''),
    regphone: new FormControl(''),
    regnickname: new FormControl(''),
  });

  constructor( private router: Router,private http: Http,private RegisterService:RegisterService) { }

  redirectTo(link :any) {
    this.router.navigate(['/'+link]);
  }

  

  
  regIn() {

    this.RegisterService.register(this.registerForm.value).subscribe((data) => {
      this.userRegisterInfo = data,
       !this.userRegisterInfo ? console.log('user exist try another login') : this.redirectTo('login');
       
    })
  }

  ngOnInit() {
  }

  
}
