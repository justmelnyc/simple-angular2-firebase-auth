import { Component } from "@angular/core";



@Component({
  selector: 'app-root',
  template: `
    <div>this is the app</div>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {

  constructor() {

  }
}
