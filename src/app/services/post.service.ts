import { user } from './../../../../GraffLag-BackEnd/GraffLag-BackEnd/server/models/userModel';
import { IUser } from './../interfaces/IUser';
import { IPost, IPostComment, IPostLike } from './../interfaces/IPost';

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
  userPosts(userid: number): Observable<IPost> {
    
    return this.http.get('/api/user/'+userid+'/posts').pipe(map(data => <IPost>(data)))
  }
  
  //////////////////////////////////////////////////////////////////////////////////////////

  news(): Observable<IPost> {

    return this.http.get('/api/news').pipe(map(data => <IPost>(data)))
  }
  getPostComments(postid:number): Observable<IPost>{
    return this.http.get('/api/news/posts/get/'+postid+'/comments').pipe(map(data => <IPost>(data)))
  }
  addPostComment(params: IPostComment): Observable<IPostComment> {
    
    return this.http.post('/api/news/post/add/comment',  params ).pipe(map(data => <IPostComment>(data)))
  }
  postLike(params: IPostLike): Observable<IPostLike> {
    
    return this.http.post('/api/news/post/like',  params ).pipe(map(data => <IPostLike>(data)))
  }
  deletePostComment(params: IPost): Observable<IPost> {
    
    return this.http.post('/api/news/post/delete/comment',  params ).pipe(map(data => <IPost>(data)))
  }

  
}

