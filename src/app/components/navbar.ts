import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<h1>Giant Nav Bar</h1>`,
  styles: ``,
})
export class Navbar {}
