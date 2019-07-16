import { PostService } from './../services/post.service';


import { AlertController } from '@ionic/angular';
import { IUser } from './home.page';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface IUser {
  userid: number,
  login: string,
  password: string,
  email: string,
  gender: string,
  birthdate: Date,
  status: string,
  phone: number
}
export interface IPost {

  userid: number,
  text: string,
  privacy: string,
  likes: string,

}

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
  user: any;

  constructor(
    private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private PostService: PostService,
  ) { }


  redirectTo(link: any) {
    this.router.navigate(['/' + link]);
  }

  usercookie() // get all user data from cookie
  {
    this.userstatus = true; // set that user are logged
    this.user = this.CookieService.get('userdata');
    this.user = JSON.parse(this.user);
  }

  sendPost() // user upload post
  {
    if (this.post != null) {
      let postparams = {
        userid: this.user.userid,
        text: this.post,
        privacy: this.postPrivacy,
        authore: this.user.login,
      }


      this.PostService.postupload(postparams).subscribe((data) => {
        data
        this.posts.push(data);
      })

    }
    else {
      console.log("post are empty, nothing to post.");
    }
  }

  getAllPosts() {
    let postparams = {
      userid: this.user.userid,
      text: this.post,
      privacy: this.postPrivacy,
      authore: this.user.login,
    }
    this.PostService.getallposts(postparams).subscribe((data) => {
      this.posts = data;
      console.log(this.posts);

    })
  }

  removePost(postid: number, userid: number, authore: string) {
    
  
    this.PostService.postd({ 'userid': (userid), 'postid': postid, 'authore': authore }).subscribe((data) => {
      data ? document.getElementById('post'+postid).remove():"";
      
    })}



  ngOnInit() {

    if (this.CookieService.get('userdata')) { this.usercookie(), this.getAllPosts() } else { this.userstatus = false; }
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

  async setStatus() {

    const alert = await this.alertController.create({
      header: 'GraffLag - Status',
      subHeader: "◉_◉",
      translucent: true,
      backdropDismiss: true,

      message: '<br><strong><i>Enter New Status</i></strong>',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("status no set");
          }
        },
        {
          text: 'Set',

          handler: () => {
            console.log("status set");
          }
        }
      ],
      inputs: [
        {
          name: 'Review',
          placeholder: 'good day for codding',
        },
      ],
    });
    
    alert.present()
  }

}
