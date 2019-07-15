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
 
  posts: any;
  title = "GraffLag - News";
  user: any;

  constructor(  private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private PostService: PostService,
    ) { }

    redirectTo(link: any) {
      this.router.navigate(['/' + link]);
    }
  
  getAllPosts() {

    this.PostService.news().subscribe((data) => {
      this.posts = data;
      console.log(data);
      
    })
  }

  ngOnInit() {
    this.getAllPosts();
  }

}
