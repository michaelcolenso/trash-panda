// client/src/router-config.js

import {AuthorizeStep} from 'paulvanbladel/aurelia-auth';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

// Using Aurelia's dependency injection, we inject Router
// with the @inject decorator
@inject(Router)

export default class {

  constructor(router) {
    this.router = router;
  };

  configure() {

    var appRouterConfig = function(config) {

      config.title = 'Future New Guy';

      // Here, we hook into the authorize extensibility point
      // to add a route filter so that we can require authentication
      // on certain routes
      config.addPipelineStep('authorize', AuthorizeStep);

      // Here, we describe the routes we want along with information about them
      // such as which they are accessible at, which module they use, and whether
      // they should be placed in the navigation bar
      config.map([
          { route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
          { route: 'words', name: 'words', moduleId: './words', nav: true, title:'Words' },
          { route: 'code', name: 'code', moduleId: './github', nav: true, title:'Code' },
          { route: 'bookmarks', name: 'bookmarks', moduleId: './pinboard', nav: true, title:'Bookmarks' },
          { route: 'ig', name: 'Photos', moduleId: './ig', nav: true, title:'Photos' },
          { route: 'who', name: 'Who', moduleId: './who', nav: false, title:'Who' },
          { route: 'reasons', name: 'Reasons', moduleId: './reasons', nav: false, title:'Reasons' },
          { route: 'contact', name: 'Contact', moduleId: './contact', nav: true, title:'Contact' },
          { route: 'outbound', name: 'Outbound', moduleId: './outbound', nav: false, title:'Outbound' },
          { route: 'signup', name: 'signup', moduleId: './signup', nav: false, title:'Signup', authRoute: true },
          { route: 'svg', name: 'svg', moduleId: './svg', nav: false, title:'Svg' },
          { route: 'login', name: 'login', moduleId: './login', nav: false, title:'Login', authRoute: true },
          { route: 'logout', name: 'logout', moduleId: './logout', nav: false, title:'Logout', authRoute: true }
        ]);
      };

    // The router is configured with what we specify in the appRouterConfig
    this.router.configure(appRouterConfig);

  };
}
