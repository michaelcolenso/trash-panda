import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-http-client';

@inject(HttpClient)
export class Outbound {
  heading = 'we should talk.';
}
