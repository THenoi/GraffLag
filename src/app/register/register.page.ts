import { HttpModule, Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RenderDebugInfo } from '@angular/core/src/render/api';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { Subscriber, observable } from 'rxjs';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 
  constructor( private router: Router,private http: Http) { }


  public userLogin: string;
  public userPassword: string;
  public userPassword2: string;
  public userEmail:string;
  public userPhone:number;
  public userGender:string;
  public userBirthdate:any;
  public error: string = "";

  redirectTo(link :any) {
    this.router.navigate(['/'+link]);
  }

  public regfn()
  {
    let formdata = new FormData();
    
    const { Client } = require('pg')
    const client = new Client({ 
    user:"postgres",
    password:"Mamicuta2828",
    host:"localhost",
    database: "pgdb_test"
   })

    client.connect()
    .then(() => console.log("DataBase Connected"))
     client.query("insert into users (userlogin, userpassword) VALUES ('userLogin', 'userPassword')")

     client.query("Select userlogin from users where userid = 2")
    .then(results => console.table(results.rows))
    .finally(() => client.end());

    

    
  }
    
  

  register()
  {
    if(this.userLogin == null)
    {
      this.error = "Empty Login";
    }
    else{

      this.error = "";
      if(this.userPassword == null)
      {
        this.error = "Empty Password";
      }

      else
      {
        this.error = "";
        if(this.userPassword2 == null)
      {
        this.error = "Empty Password Again";
      }

      else
      {
        this.error = "";
        if(this.userPassword != this.userPassword2)
      {
        this.error = "Passwords Don't Match";
      }

      else
      {
        this.error = "";
        if(this.userEmail == null)
      {
        this.error = "Empty Email";
      }

      else
      {
        this.error = "";
        if(this.userPhone == null)
      {
        this.error = "Empty Phone";
      }

      else
      {
        this.error = "";
        if(this.userGender == null)
      {
        this.error = "Empty Gender";
      }

      else
      {
        this.error = "";
        if((this.userGender == "male") || (this.userGender =="female") || (this.userGender =="Male") || (this.userGender =="Female"))
      {
        this.error =  "";
        if(this.userBirthdate == null)
        {
          this.error = "Emppty BirthData";
        }
        else{
          this.error = "";
          this.regfn();

        }
      }

      else
      {
       
        this.error =  this.userGender+ " Not Exist";
        
      }
      }
      }
      }
      }
      }
      }
    }


     console.log(this.userLogin+ " " + this.userPassword+ " " + this.userEmail+ " " + this.userPhone+ " " + this.userGender+ " " + this.userBirthdate); 
  }

  
  

  ngOnInit() {
  }

  
}
