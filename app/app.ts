import { Component } from '@angular/core';
import { ionicBootstrap, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Http } from '@angular/http';
import { Data } from './providers/data/data';
import 'rxjs/add/operator/map';

import { HomePage } from './pages/home/home';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;
  data: any;
  cityid: string;
  appid: string;
  constructor(public platform: Platform, public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      
    });
  }
}

ionicBootstrap(MyApp, [Data]);
