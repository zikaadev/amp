import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  styleUrls: ['./app.component.css'],
  template: `
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pils">
      <li><a class="nav-link" [routerLink]="['/welcome']">Home</a></li>
      <li><a class="nav-link" [routerLink]="['/products']">Product List</a></li>
    </ul>
  </nav>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  pageTitle: string = 'Acme Product Management'; // major title
}
