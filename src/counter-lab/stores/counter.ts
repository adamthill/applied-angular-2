import {
  patchState,
  signalStore,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

const IncrementValues = [1, 3, 5] as const;
type Increment = (typeof IncrementValues)[number];
type CounterState = {
  increment: Increment;
  counter: number;
};

export const CounterStore = signalStore(
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
);
