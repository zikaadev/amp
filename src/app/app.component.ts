import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div>
  <h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string = 'Acme Product Management'; // major title
}
