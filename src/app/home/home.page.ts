
import { PostService } from './../services/post.service';


import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { IPost } from '../interfaces/IPost';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  userstatus: boolean;
  userAge: Date;
  postPrivacy: string = 'Public';
  post: string = null;
  posts: any;
  title = "GraffLag - Home";
  user:IUser;

  constructor(
    private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private PostService: PostService,
  ) { }


  redirectTo(link: any) {
    this.router.navigate(['/' + link]);
    
  }

  userCookie() // get all user data from cookie
  {
    this.userstatus = true; // set that user are logged
    this.user = JSON.parse(this.CookieService.get('userdata'));
    
  
  }

  createPost() // user upload post
  {
    if (this.post != null) {
      let curentPost = {

        userid: this.user.userid,
        text: this.post,
        privacy: this.postPrivacy,
        authore:this.user.nickname
      }
      this.PostService.postUpload(curentPost).subscribe((data) => {
        this.posts.push(data);
      })

    }
    else {
      console.log("post are empty, nothing to post.");
    }
  }

  userPosts() { //get all user posts
    
    this.PostService.userPosts(this.user.userid).subscribe((data) => {
      this.posts = data;
      console.log(this.posts);

    })
  }

  removePost(postid: number, userid: number) {
    let curentPost = {
      userid: userid,
      postid: postid,
    }
    this.PostService.postDelete(curentPost).subscribe((data) => {
      data ? document.getElementById('post'+postid).remove():"";
      
    })}



  ngOnInit() {

    if (this.CookieService.get('userdata')) { this.userCookie() ,this.userPosts() } else { this.userstatus = false; }
  }

  async privacySetAlert() {

    const alert = await this.alertController.create({
      header: 'GraffLag - Post Privacy',
      subHeader: "◉_◉",
      translucent: true,
      backdropDismiss: true,

      message: '<br><strong><i>What type of privacy you want for post ?</i></strong>',
      buttons: [
        {
          text: 'Public',

          handler: () => {
            this.postPrivacy = 'Public'
          }
        },
        {
          text: 'Private',

          handler: () => {
            this.postPrivacy = 'Private'
          }
        },
        {
          text: 'Friends',

          handler: () => {
            this.postPrivacy = 'Friends'
          }
        }

      ]
    });
    alert.present()
  }

}