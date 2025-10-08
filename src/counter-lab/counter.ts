import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: ` <div>
    <p>Counter Stuff Goes Here</p>
    <a routerLink="ui">UI</a>
    <router-outlet />
  </div>`,
  styles: ``,
})
export class Counter {}
