import { UpdateService } from './../services/update.service';

import { LoginService } from './../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

 
  userLoginInfo: {};

  updateForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    passwordnew: new FormControl('')

  });

  constructor(private router: Router, private LoginService: LoginService,private UpdateService:UpdateService) { }

  redirectTo(link: string) {
    this.router.navigate(['/' + link]);
  }

  upDate() {
    debugger
    
    this.UpdateService.updata(this.updateForm.value).subscribe((data) => {
      this.userLoginInfo = data,
        console.log('this.userLoginInfo ', this.userLoginInfo)
    })


  }

  ngOnInit() {
  }
}
