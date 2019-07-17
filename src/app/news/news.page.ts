import { IPost } from './../interfaces/IPost';
import { IUser } from './../interfaces/IUser';
import { log } from 'util';
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

  constructor(private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private PostService: PostService,
  ) { }

  redirectTo(link: any) {
    this.router.navigate(['/' + link]);
  }

  newsPosts() {

    this.PostService.news().subscribe((data) => {
      this.posts = data;
      console.log(data);
      

    })
    this.newsPostsRefreh()
  }
  getUserId(){
     this.user = JSON.parse(this.CookieService.get('userdata'));
  }
  postlike(postid: number,userid:number) {
    let curentPost = {
      userid: userid,
      postid: postid,
    }
    this.PostService.like(curentPost).subscribe(data => console.log(data))
   
  }
  newsPostsRefreh()
  {
    const newspost = this.newsPosts()
    setInterval(function(){newspost},10000);
 
  }
  ngOnInit() {
    this.newsPosts();
    this.getUserId();
  }

}
