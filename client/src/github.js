import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

// Using Aurelia's dependency injection, we inject HttpClient
// with the @inject decorator to make HTTP requests
@inject(HttpClient)

export class Code {

  heading = 'Code';

  events = {};

  constructor(http) {
    this.http = http;
  };

  activate() {
    return this.http.get('http://localhost:3001/github')
    .then(response => {
      // console.log(response.content);
      this.events = response.content;
      console.log("EVENTS::::::\n", this.events);
    }).catch(error => {
      console.log('Error getting events');
    });
  };
}
