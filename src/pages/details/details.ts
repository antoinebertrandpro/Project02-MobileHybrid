import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

public article: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.article = this.navParams.get('article');
  	console.log(this.article);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}
