
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { AlertController } from '@ionic/angular';
import { IUser } from './interfaces/IUser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  user:IUser;

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private CookieService:CookieService,
    private alertController:AlertController,
    private titleService: Title
  ) {
    this.initializeApp();
  }

  redirectTo(link :any) {
    this.CookieService.get('userdaata') && link=="login"? alert("Sorry but you are Loged in System"):
    this.router.navigate(['/'+link]);
    this.menu.close('MainMenu');
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openFirst() {
    this.menu.enable(true, 'MainMenu');
    this.menu.open('MainMenu');
  }

  openEnd() {
    this.menu.close('MainMenu');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  
  async logout() {
    let user = JSON.parse(this.CookieService.get('userdata'));
    const alert = await this.alertController.create({
      header: 'GraffLag - LogOut',
      subHeader: "ಠ_ಠ",
      translucent: true,
      
      message: '<br><strong><i>Hei '+user.nickname+' you really want to exit ?</i></strong>',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log("user remains in system yeah");
           this.openEnd();
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.CookieService.delete('userdata');
            this.CookieService.deleteAll('userdata');
            window.location.reload();
          }
        }
      ]
    });
    alert.present()
  }
  

 }

