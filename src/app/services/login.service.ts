import { User } from './../login/login.page';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, mapTo } from "rxjs/operators";
import { Observable, observable } from 'rxjs';
import { IUser } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(params: any): Observable<IUser> {
   
    return this.http.post('/api/login', { 'login': (params.login), 'password': params.password }).pipe(map(data => <IUser>(data)))
  
  }
}
