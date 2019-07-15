
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable, observable } from 'rxjs';
import { IPost } from '../home/home.page';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  //###########################
  //postu = postupload
  //postd = postdelete
  //postup = postupdate
  //###########################

  postupload(params: any): Observable<IPost> {

    return this.http.post('/api/postu', { 'userid': params.userid, 'text': params.text,'privacy':params.privacy,'authore':params.authore }).pipe(map(data => <IPost>(data)))
  }

  postd(params: any): Observable<IPost> { 
    return this.http.post('/api/postd', { 'userid': (params.userid), 'postid': params.postid,'authore':params.authore }).pipe(map(data => <IPost>(data)))
  }

  // postup(params: any): Observable<IPost> { 
  //   return this.http.post('/api/postup', { 'userid': (params.login), 'text': params.password, }).pipe(map(data => <IPost>(data)))
  // }

  getallposts(params: any): Observable<IPost> {

    return this.http.post('/api/postgetall', { 'userid': (params.userid),'authore':params.authore }).pipe(map(data => <IPost>(data)))
  }
  
  news(): Observable<IPost> {

    return this.http.post('/api/news',{}).pipe(map(data => <IPost>(data)))
  }
  
}

