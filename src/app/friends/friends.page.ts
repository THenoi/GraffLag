import { FriendsService } from './../services/friends.service';
import { ProfileService } from './../services/profile.service';
import { ActivatedRoute } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { IFriendRequest, IFriend } from '../interfaces/IFriend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  user: IUser;
  friendRequest: IFriendRequest;
  friends: IFriend;

  constructor(private router: Router,
    private CookieService: CookieService,
    private FriendsService: FriendsService,
    private route: ActivatedRoute, ) { }

  redirectTo(link: any) {
    this.router.navigate(['/' + link]);
  }
  getUserData() { // +
    this.user = JSON.parse(this.CookieService.get('userdata'));
  }

  getAllFriendsRequest() {
    this.FriendsService.getAllFriendsRequest(this.user.userid).subscribe((data) => {
      console.log(data);
      this.friendRequest = data;

    });
  }

  getAllFriends() {
    this.FriendsService.getAllFriends(this.user.userid).subscribe((data) => {
      console.log(data);
      this.friends = data;

    });
  }
  deleteFriend(profileid:number)
  {
    this.FriendsService.deleteFriend(this.user.userid,profileid).subscribe((data) => {
      console.log("friends deleted");

    });
  }

  acceptFriendRequest(fromid: number) {
    this.FriendsService.acceptFriendRequest(fromid, this.user.userid).subscribe((data) => {
      data != null ? console.log("user accepted") : console.log("user not accepted");
    });
  }
  declineFriendRequest(fromid: number, currentRequestId: number) {
    delete this.friends[currentRequestId];
  }

  ngOnInit() {
    this.getUserData();
    this.getAllFriendsRequest();
    this.getAllFriends();
  }

}
