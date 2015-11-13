import {inject} from 'aurelia-framework';
import {AuthService} from 'paulvanbladel/aurelia-auth';

// Using Aurelia's dependency injection, we inject the AuthService
// with the @inject decorator
@inject(AuthService)

export class Login {

  heading = 'Login';

  // These view models will be given values
  // from the signup form user input
  email = '';
  password = '';

  // Any signup errors will be reported by
  // giving this view model a value in the
  // catch block within the signup method
  loginError = '';

  constructor(auth) {
    this.auth = auth;
  };

  login() {

    // Object to hold the view model values passed into the signup method
    var userInfo = { email: this.email, password: this.password }

    return this.auth.login(userInfo)
    .then((response) => {
      console.log("logged in. awesome.");
    })
    .catch(error => {
      this.loginError = error.response;
    });

  };
}
