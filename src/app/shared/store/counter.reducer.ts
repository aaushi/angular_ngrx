import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';

const createCounterReducer = createReducer(initialState,
  on(increment, (state) => {
    console.log("increment reducer")
    console.log(state)
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return createCounterReducer(state, action);
}
