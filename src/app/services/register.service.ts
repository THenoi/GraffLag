import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  register(params: IUser): Observable<IUser> {

    return this.http.post('/api/reg',  params).pipe(map(data => <IUser>(data)))
  }
}
