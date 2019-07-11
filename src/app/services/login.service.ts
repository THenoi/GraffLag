import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(userLogin: String, userPassword: string) {

    return this.http.post('/api/login', { "login": userLogin, "password": userPassword })
     

  }



}
