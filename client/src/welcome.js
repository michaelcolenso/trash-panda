export class Welcome {

  heading = 'I\'m ready. Let\'s go.';
  subhead = ''
  info = 'So, I think I might be a good fit for the position at Brandly. If you\'re still looking for a talented and passionate front end developer to join your team, I\'m your guy.';

  constructor() {
    this.styleString = 'display: none;';
  }

  toggleButton(e, text) {
    console.log(this.styleString);
    if (this.styleString == 'display: none;') {
      return this.styleString = 'display: block;';
    } else if (this.styleString == 'display: block;') {
      return this.styleString = 'display: none;';
    }
  }

}
