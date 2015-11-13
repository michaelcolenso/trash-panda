import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aurelia-auth';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService)

export class Logout {


  constructor(AuthService) {
    this.AuthService = AuthService;
  };

  activate() {


    this.AuthService.logout("#/login")
    .then((response) => {
      console.log("Logged out. later, skater.");
    })
    .catch(error => {
      console.log("problems, friend.", error.response);
    });

  };
}
