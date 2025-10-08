import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';
import { Fizzbuzz } from '../components/fizzbuzz';

@Component({
  selector: 'app-ui',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Fizzbuzz],
  template: `
    <div>
      <button
        [disabled]="!canDecrement()"
        (click)="downCount()"
        class="btn btn-primary"
      >
        -
      </button>
      <span>{{ counter() }} </span>
      <button (click)="upCount()" class="btn btn-primary">+</button>

      <app-fizzbuzz [counter]="counter()" />
    </div>
  `,
  styles: ``,
})
export class Ui {
  counter = signal(6);

  canDecrement = computed(() => this.counter() !== 0);

  upCount() {
    this.counter.update((c) => c + 1);
  }
  downCount() {
    this.counter.update((c) => c - 1);
  }
}
