import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

// Using Aurelia's dependency injection, we inject HttpClient
// with the @inject decorator to make HTTP requests
@inject(HttpClient)

export class Bookmarks {

  heading = 'Bookmarks';

  posts = [];

  constructor(http) {
    this.http = http;
  };

  activate() {
    return this.http.get('http://localhost:3001/pinboard')
    .then(response => {
      this.posts = JSON.parse(response.content);

      console.log("bookmarks::::::", this.posts);
    }).catch(error => {
      console.log('Error getting bookmarks');
    });
  };
}
