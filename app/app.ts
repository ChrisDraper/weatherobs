import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { HomePage } from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;
  thumbnail: any;
  constructor(public platform: Platform, public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // API call
      console.log('Ready');
      this.thumbnail = null;
      this.http.get('https://www.reddit.com/r/gifs/top/.json?limit=10').map(res => res.json()).subscribe(data => {
          this.thumbnail = data.data.children[0].data.thumbnail;
          console.log('Thumbnail: ' + this.thumbnail);
      });
    });
  }
}

ionicBootstrap(MyApp);
