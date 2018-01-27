import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ArticlesProvider } from '../../providers/articles/articles'
import { DetailsPage } from '../details/details'

/**
 * Generated class for the TitlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-titles',
  templateUrl: 'titles.html',
})

export class TitlesPage {

	public section: any;
	public rssfeed: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: ArticlesProvider) {
  	this.section = this.navParams.get('section');
  	this.rssfeed = provider.getArticles(this.section.rss);
    this.rssfeed.subscribe(data => console.log(data))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TitlesPage');
  }

  articleSelected(article) {
        this.navCtrl.push(DetailsPage, {
            'article': article
        })
    }
}
