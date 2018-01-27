import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesProvider {

  constructor(public db: AngularFirestore) {
    console.log('Hello ServicesProvider Provider');
  }

  getServices() {
  	return this.db.collection('services').valueChanges();
  }
}
