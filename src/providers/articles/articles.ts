import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ArticlesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticlesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ArticlesProvider Provider');
  }

	getArticles(rss) {
		console.log("https://api.rss2json.com/v1/api.json?rss_url=" + rss);
		return (this.http.get("https://api.rss2json.com/v1/api.json?rss_url=" + rss));
	}

}
