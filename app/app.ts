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
  data: any;
  cityid: string;
  appid: string;
  constructor(public platform: Platform, public http: Http) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      // API call
      console.log('Ready');
      this.data = null;
      this.cityid = '2652318';
      this.appid = '93d084a13ebef466e99ba2ccda6458f7';
      this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=51.431443&lon=-2.189674&units=metric&APPID=' + this.appid).map(res => res.json()).subscribe(data => {
          this.data = data;
          // Create a new JavaScript Date object based on the timestamp
          var date = new Date(this.data.dt*1000);
          var hours = date.getHours();
          var minutes = "0" + date.getMinutes();
          var formattedTime = hours + ':' + minutes.substr(-2);
          console.log('Time: ' + formattedTime);
          console.log('Temp: ' + this.data.main.temp + "C");
          console.log('Weather: ' + this.data.weather[0].icon);
      });
    });
  }
}

ionicBootstrap(MyApp);
