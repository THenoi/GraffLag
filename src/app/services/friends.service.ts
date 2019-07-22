import { IFriendRequest, IFriend } from './../interfaces/IFriend';

import { IUser } from './../interfaces/IUser';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }
  getAllFriendsRequest(userid:number): Observable<IFriendRequest> {
    
    return this.http.get('/api/friends/'+userid+'/getAllFriendsRequest').pipe(map(data => <IFriendRequest>(data)))
  }
  acceptFriendRequest(atid:number,toid:number): Observable<IFriendRequest> {
    
    
    return this.http.post('/api/friends/acceptFriendRequest',{atid,toid}).pipe(map(data => <IFriendRequest>(data)))
  }
  getAllFriends(userid:number): Observable<IFriend> {
    
    
    return this.http.get('/api/friends/'+userid+'/getAllFriends').pipe(map(data => <IFriend>(data)))
  }
  deleteFriend(userid:number,profileid:number): Observable<boolean> {
    return this.http.post('/api/friends/deleteFriend',{userid,profileid}).pipe(map(data => <boolean>(data)))
  }
}
