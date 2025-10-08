import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-fizzbuzz',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    @switch (this.fizzBuzzer()) {
      @case ('fizz') {
        <div class="alert alert-dash alert-info">Fizz</div>
      }
      @case ('buzz') {
        <div class="alert alert-dash alert-warning">Buzz</div>
      }
      @case ('fizzbuzz') {
        <div class="alert alert-dash alert-success">FizzBuzz</div>
      }
    }
  `,
  styles: ``,
})
export class Fizzbuzz {
  counter = input.required<number>();
  fizzBuzzer = computed<FizzBuzz>(() => {
    if (this.counter() === 0) return null;
    if (this.counter() % 15 === 0) return 'fizzbuzz';
    if (this.counter() % 3 === 0) return 'fizz';
    if (this.counter() % 5 === 0) return 'buzz';
    return null;
  });
}

type FizzBuzz = 'fizz' | 'buzz' | 'fizzbuzz' | null;
