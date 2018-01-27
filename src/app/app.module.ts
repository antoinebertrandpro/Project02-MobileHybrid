import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SectionsPage } from '../pages/sections/sections'
import { TitlesPage } from '../pages/titles/titles'
import { DetailsPage } from '../pages/details/details'
import { ArticlesProvider } from '../providers/articles/articles';
import { ServicesProvider } from '../providers/services/services';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from '../environnement';
import { AngularFirestoreModule } from 'angularfire2/firestore'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SectionsPage,
    TitlesPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SectionsPage,
    TitlesPage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ArticlesProvider,
    ServicesProvider
  ]
})
export class AppModule {}
