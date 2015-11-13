//import {computedFrom} from 'aurelia-framework';

export class Welcome {
  heading = 'me + brandly';
  info = 'So, I think I might be a good fit for the position at Brandly. Here\'s why';

  toggleButton(e) {
    var body = document.body;
    var element = e.target;
    element.classList.add('active');
    body.classList.add('blur');
    
    element.addEventListener('mouseleave', function(e) {
      e.target.classList.remove('active');
      body.classList.remove('blur');
    }, false);

  }


}
