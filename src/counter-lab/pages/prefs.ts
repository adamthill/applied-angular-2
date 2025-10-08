import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <h2>Your preferences</h2>
    <div class="join">
      Increment Value
      @for (increment of counterStore.increments; track increment) {
        <button
          [disabled]="counterStore.increment() === increment"
          (click)="counterStore.setIncrement(increment)"
          class="join-item btn btn-sm"
        >
          {{ increment }}
        </button>
      }
    </div>
  `,
  providers: [],
  styles: ``,
})
export class Prefs {
  protected counterStore = inject(CounterStore);
}
