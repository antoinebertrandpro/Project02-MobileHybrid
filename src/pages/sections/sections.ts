import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sections',
  templateUrl: 'sections.html',
})
export class SectionsPage {

public service:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.service = this.navParams.get('service');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionsPage');
  }

}
