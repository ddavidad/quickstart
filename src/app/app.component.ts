import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <bar></bar>
            <router-outlet></router-outlet>`,
})
export class AppComponent  {
    name = 'Angular';
}
