
import { IUser } from './../interfaces/IUser';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileDataServices(profileid: number): Observable<IUser> {
    
    return this.http.get('/api/profile/'+profileid).pipe(map(data => <IUser>(data)))
  }
  getProfilePostsServices(profileid: number): Observable<IUser> {
    
    return this.http.get('/api/profile/'+profileid+'/posts').pipe(map(data => <IUser>(data)))
  }
  ProfileFriendRequest(userid:number,profileid:number): Observable<boolean> {
    
    return this.http.post('/api/profile/friendrequest',{userid,profileid}).pipe(map(data => <boolean>(data)))
  }
}

