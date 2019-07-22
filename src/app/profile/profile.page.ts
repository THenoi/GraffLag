import { ProfileService } from './../services/profile.service';

import { PostService } from './../services/post.service';

import { ActivatedRoute } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { IPost } from '../interfaces/IPost';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  post: string = null;
  posts: IPost;
  user: IUser;
  profile: IUser = {
    userid: null,
    username: null,
    password: null,
    email: null,
    gender: null,
    birthdate: null,
    phone: null,
    nickname: null,
    status: null,

  }
  profileid: number;
  FriendRequestStatus: boolean = true;
  message:string;

  constructor(private router: Router,
    private CookieService: CookieService,
    private alertController: AlertController,
    private ProfileService: ProfileService,
    private route: ActivatedRoute, ) { }

  redirectTo(link: any) {
    this.router.navigate(['/' + link]);
  }
  getUserData() { // +
    this.user = JSON.parse(this.CookieService.get('userdata'));
  }

  getProfileData() { //get all user posts

    this.ProfileService.getProfileDataServices(this.profileid).subscribe((data) => {
      this.profile = data;


    })
  }
  friendRequest(profileid: number, userid: number) {

    this.ProfileService.ProfileFriendRequest(this.user.userid, this.profile.userid).subscribe((data) => {
      data ? this.FriendRequestStatus = false:this.message = "Request already sent";
    });
  }
  getProfilePosts() { //get all user posts

    this.ProfileService.getProfilePostsServices(this.profileid).subscribe((data) => {
      this.posts = data;
      console.log(this.posts);

    })
  }

  // goHome()
  // { 
  //   this.user.userid == this.profileid ? this.redirectTo('home'):'';
  // }
  ngOnInit() {
    this.profileid = parseInt(this.route.snapshot.paramMap.get("profileid"));
    this.getUserData();

    this.user.userid == this.profileid ? this.redirectTo('home') : '';

    this.getProfileData();
    this.getProfilePosts()
  }

}
