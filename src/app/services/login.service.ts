import { User } from './../login/login.page';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mapTo } from "rxjs/operators";
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(params: any): Observable<any> {
    debugger;
    return this.http.post('/api/login', { 'login': params.login, 'password': params.password })
  }
  }
