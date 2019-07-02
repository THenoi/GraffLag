import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = "GraffLag - Home";
  
  constructor(
    private router: Router,
  ) {}
  redirectToLogin (){
    console.log('not write in idex.htmll');
    
  }
}
