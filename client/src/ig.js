import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

// Using Aurelia's dependency injection, we inject HttpClient
// with the @inject decorator to make HTTP requests
@inject(HttpClient)

export class Ig {

  heading = 'ig';

  // View model that will be populated with the
  // the random quote retrieved from the API and
  // displayed in the view
  ig = {};

  constructor(http) {
    this.http = http;
  };

  activate() {
    return this.http.get('http://localhost:3001/ig')
    .then(response => {
      // console.log(response.content);
      this.ig = response.content;
      console.log(this.ig);
    }).catch(error => {
      console.log('Error getting ig');
    });
  };
}
