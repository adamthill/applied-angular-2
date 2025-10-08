import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CounterStore } from './stores/counter';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  template: ` <div>
    <p>Counter Stuff Goes Here</p>
    <a routerLink="ui">UI</a>
    <a routerLink="prefs">Prefs </a>
    <router-outlet />
  </div>`,
  styles: ``,
  providers: [CounterStore],
})
export class Counter {}
