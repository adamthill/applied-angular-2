import {
  Component,
  ChangeDetectionStrategy,
  computed,
  inject,
} from '@angular/core';
import { Fizzbuzz } from '../components/fizzbuzz';
import { CounterStore } from '../stores/counter';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Fizzbuzz],
  template: `
    <div>
      <button
        [disabled]="!store.canDecrement()"
        (click)="store.downCount()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ store.counter() }} </span>
      <button (click)="store.upCount()" class="btn btn-primary">+</button>

      <app-fizzbuzz [counter]="store.counter()" />
    </div>
  `,
  styles: ``,
  providers: [],
})
export class Ui {
  store = inject(CounterStore);
}
