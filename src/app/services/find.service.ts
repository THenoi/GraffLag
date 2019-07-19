import { IUser } from './../interfaces/IUser';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor(private http: HttpClient) { }

  getAllProfiles(userid:number): Observable<IUser> {
    return this.http.get('/api/find/'+userid+'/getAllUsers' ).pipe(map(data => <IUser>(data)))
  }
}
