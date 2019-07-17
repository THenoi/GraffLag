import { IPost, IPostComment } from './../interfaces/IPost';
import { IUser } from './../interfaces/IUser';

import { PostService } from './../services/post.service';


import { AlertController } from '@ionic/angular';

import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  posts: IPost;
  title = "GraffLag - News";
  user:IUser;
  PostComment:IPostComment;
  comment:string;

  constructor(private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private PostService: PostService,
  ) { }

  redirectTo(link: any) { //+
    this.router.navigate(['/' + link]);
  }

  newsPosts():any { //+

    this.PostService.news().subscribe((data) => {
      this.posts = data;
    })


  }
  getUserId(){ // +
     this.user = JSON.parse(this.CookieService.get('userdata'));
  }

  
  getPostComments(postid:number) // -
  {   
    console.log("request for comments");

    this.PostService.getPostComments(postid).subscribe(data => 
      {
        this.PostComment = data;
        this.posts.comments = this.PostComment;
        console.log(this.posts.comments);

        (<HTMLInputElement>document.getElementById('comments'+postid)).append(showcomments);
        
      });

      // let showcomments = "<ion-card *ngFor='let commentdata of item.comment'color='dark'style='margin-bottom: -5%;'>"
      // +"<ion-card-header>"
      //       +"<ion-row>"
      //             +"<ion-col text-center size='2'>"
      //                 +"<ion-img src='../../assets/img/logo2.png'></ion-img>"
      //            + "</ion-col>"
      //             +"<ion-col text-left size='10'>"
      //               +  "<ion-card-title start>{{"+this.user.authore+"}}</ion-card-title>"
      //               +  "<ion-card-subtitle end>{{commentdata.createdAt}}</ion-card-subtitle>"
      //            + "</ion-col>"
      //       +  "</ion-row>"
      //    + "</ion-card-header>"

      //    + "<ion-card-content>"
      //         +    "{{commentdata.comment}}"
      //     +"</ion-card-content>"

      // + "</ion-card>";

  }
  addPostComments(postid:number,userid:number,authore:string)   // +
  {
    let curentcomment = {
      postid:postid,
      userid:userid,
      comment:(<HTMLInputElement>document.getElementById('comment'+postid)).value,
      authore:authore,
    }
    this.PostService.addPostComments(curentcomment).subscribe(data => 
      {
        this.PostComment = data
       console.log(this.PostComment);
       
       
      });
    
  }
  ngOnInit() {
    this.newsPosts();
    this.getUserId();
  }

}
