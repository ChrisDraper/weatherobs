import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
 
  data: any;
  cityid: string;
  appid: string;
  formattedData: any;

  constructor(private http: Http) {}

  getLatestObservation(): any {
      //this.data = null;
      //this.cityid = '2652318';
      //this.appid = '93d084a13ebef466e99ba2ccda6458f7';
      //this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=51.431443&lon=-2.189674&units=metric&APPID=' + this.appid).map(res => res.json()).subscribe(data => {
        //  this.data = data;
          // Create a new JavaScript Date object based on the timestamp
          //var date = new Date(this.data.dt*1000);
         // var hours = date.getHours();
         // var minutes = "0" + date.getMinutes();
         // var formattedTime = hours + ':' + minutes.substr(-2);
         // console.log('Time: ' + formattedTime);
         // console.log('Temp: ' + this.data.main.temp + "C");
          //console.log('Weather: ' + this.data.weather[0].icon);
     // }); 
      return {temp: "14C", time: "13:35", type: "snow.png"};
  }

 formatObservation(data): any {
      this.formattedData = {time: '', temp: '', type: ''};
      var date = new Date(data.dt*1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var formattedTime = hours + ':' + minutes.substr(-2);
      this.formattedData.time = formattedTime;
      this.formattedData.temp = data.main.temp + "C";
      this.formattedData.type = data.weather[0].icon;
      return this.formattedData;
 }

  getRecentObservations(): any {
    return [
            {type: 'snow.png',
            temp: '-1.2C',
            time: '2PM'},
            {type: 'lsnow.png',
            temp: '-1.1C',
            time: '1PM'},
            {type: 'dcloud.png',
            temp: '-1.1C',
            time: '12PM'},
            {type: 'dcloud.png',
            temp: '-1.1C',
            time: '11AM'},
            {type: 'lcloud.png',
            temp: '-1.0C',
            time: '10AM'},
        ];
  }

  

  

}

