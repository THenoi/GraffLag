import { PostService } from './../services/post.service';
import { IPost, IPostComment } from './../interfaces/IPost';
import { IUser } from './../interfaces/IUser';
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
  user: IUser;
  PostComment: IPostComment;
  comment: string;

  constructor(private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private PostService: PostService,
  ) { }

  redirectTo(link: any) { //+
    this.router.navigate(['/' + link]);
  }

  getUserData() { // +
    this.user = JSON.parse(this.CookieService.get('userdata'));
  }

  newsPosts(): any { //+

    this.PostService.news().subscribe((data) => {
      this.posts = data;
    })




  }

  getPostComments(postid: number, postInNewsId: number) // +
  {
    if (!this.posts[postInNewsId].commentshow) {
      this.PostService.getPostComments(postid).subscribe(data => {
        this.PostComment = data;
        this.posts[postInNewsId].comments = this.PostComment;
        this.posts[postInNewsId].commentshow = true;

      });
    }
    else {
      this.posts[postInNewsId].comments = null;
      this.posts[postInNewsId].commentshow = false;
    }
  }


  addPostComments(postid: number, userid: number, authore: string, postInNewsId: number)   // +
  {
    let curentcomment = {
      postid: postid,
      userid: userid,
      comment: (<HTMLInputElement>document.getElementById('comment' + postid)).value,
      authore: authore,
    }

    this.PostService.addPostComment(curentcomment).subscribe(data => {
      this.PostComment = data
      this.posts[postInNewsId].comments.push(this.PostComment);
    });
  }

  likePost(postid: number, userid: number) {
    console.log(postid, userid);
    let curentLike = {
      postid: postid,
      userid: userid,
    }

    this.PostService.postLike(curentLike).subscribe((data) => console.log(data));
  }
  deleteComent(commentid: number,postid: number, userid: number,postInNewsId:number,commentInPostId:number) {
    let curentLike = {
      commentid: commentid,
      postid: postid,
      userid: userid,
    }
    
    this.PostService.deletePostComment(curentLike).subscribe((data) => 
    {
      data == 1 ? this.posts[postInNewsId].comments.splice(commentInPostId,1):'' ;
    })
  }
  

  ngOnInit() {
    this.newsPosts();
    this.getUserData();
  }

}
