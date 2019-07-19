
import { IUser } from './../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  constructor(private http: HttpClient) { }

  publicSettings(params: IUser): Observable<IUser> {
    return this.http.post('/api/publicSettings',  params ).pipe(map(data => <IUser>(data)))
   
  }

  personalSettings(params: IUser): Observable<IUser> {
    return this.http.post('/api/personalSettings',  params ).pipe(map(data => <IUser>(data)))
   
  }
}