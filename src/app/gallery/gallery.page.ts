
import { PostService } from './../services/post.service';


import { AlertController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../interfaces/IUser';
import { IPost } from '../interfaces/IPost';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }

}
