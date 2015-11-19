import {inject} from 'aurelia-framework';
import {HttpClient,json} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Contact {
  heading = 'we should talk.';

  firstName = '';
  message = '';

  constructor(http) {
    http.configure(config => {
      config
        .withBaseUrl('http://localhost:3001/');
    });

    this.http = http;
  }

  callMikey(message) {
    message = this.message;
    this.http.fetch('contact', {
      method: 'POST',
      json: true,
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(message)
    })
    .then(response => {
      console.log(response);
    });
  }

}
