import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

	observations: any;

	constructor(public navCtrl: NavController) {
		this.observations = [
            {type: 'snow.png',
            temp: '-1C',
            time: '2PM'},
            {type: 'lsnow.png',
            temp: '-1C',
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
