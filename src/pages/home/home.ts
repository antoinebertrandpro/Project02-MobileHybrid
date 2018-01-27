import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services'
import { Observable } from 'rxjs/Observable'
import { SectionsPage } from '../sections/sections'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public services: Observable<any[]>;

  constructor(public navCtrl: NavController, public provider: ServicesProvider) {
  	this.services = provider.getServices();
  }

   serviceSelected(service) {
        this.navCtrl.push(SectionsPage, {
            'service': service
        })
    }
}
