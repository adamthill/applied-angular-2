import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<p>The Dashboard will live here</p>`,
  styles: ``,
})
export class Dashboard {}
