import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {


  redirectTo(link :any) {
    this.router.navigate(['/'+link]);
    this.menu.close('MainMenu');
  }
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
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
}
