import { user } from './../../../../GraffLag-BackEnd/GraffLag-BackEnd/server/models/userModel';
import { IUser } from './../interfaces/IUser';
import { IPost } from './../interfaces/IPost';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }


  postUpload(params: IPost): Observable<IPost> {

    return this.http.post('/api/postupload',  params ).pipe(map(data => <IPost>(data)))
  }

  postDelete(params: IPost): Observable<IPost> { 
    return this.http.post('/api/postdelete',  params ).pipe(map(data => <IPost>(data)))
  }

  // postup(params: any): Observable<IPost> { 
  //   return this.http.post('/api/postup', { 'userid': (params.login), 'text': params.password, }).pipe(map(data => <IPost>(data)))
  // }

  userPosts(userid: number): Observable<IPost> {
    
    return this.http.get('/api/user/'+userid+'/posts').pipe(map(data => <IPost>(data)))
  }
  
  news(): Observable<IPost> {

    return this.http.get('/api/news').pipe(map(data => <IPost>(data)))
  }
  
}

