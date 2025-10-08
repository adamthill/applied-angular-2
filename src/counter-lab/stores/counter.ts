import { computed } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import {
  withDevtools,
  withLocalStorage,
  withStorageSync,
} from '@angular-architects/ngrx-toolkit';

const IncrementValues = [1, 3, 5] as const;
type Increment = (typeof IncrementValues)[number];
type CounterState = {
  increment: Increment;
  counter: number;
};

export const CounterStore = signalStore(
  withDevtools('counter'),
  withState<CounterState>({
    increment: 1,
    counter: 6,
  }),
  withProps(() => ({ increments: IncrementValues })),
  withMethods((state) => ({
    setIncrement: (increment: Increment) => patchState(state, { increment }),
    upCount: () =>
      patchState(state, { counter: state.counter() + state.increment() }),
    downCount: () =>
      patchState(state, { counter: state.counter() - state.increment() }),
  })),
  withComputed((state) => ({
    canDecrement: computed(() => state.counter() - state.increment() >= 0),
  })),
  withStorageSync('counter'),
);
