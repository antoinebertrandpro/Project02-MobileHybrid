import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable'
import { TitlesPage } from '../titles/titles'

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

public service: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.service = this.navParams.get('service');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SectionsPage');
  }

  sectionSelected(section) {
        this.navCtrl.push(TitlesPage, {
            'section': section
        })
    }
}
