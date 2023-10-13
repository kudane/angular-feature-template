import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterOutlet]
})
export class AppComponent {
}
