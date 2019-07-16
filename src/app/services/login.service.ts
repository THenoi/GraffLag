import { IUser } from './../interfaces/IUser';
import { User } from './../login/login.page';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(params: IUser): Observable<IUser> {
    return this.http.post('/api/login',  params ).pipe(map(data => <IUser>(data)))
   
  }
}
