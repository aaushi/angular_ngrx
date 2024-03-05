import { createReducer, on } from '@ngrx/store';
import {  customOperation, decrement, increment, renameOwner, reset } from './counter.actions';
import { initialState } from './counter.state';

const createCounterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log('increment reducer');
    console.log(state);
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
  }),
  on(customOperation, (state, action) => {
    return {
      ...state,
      counter:
        action.selected === 'add'
          ? state.counter + action.value
          : state.counter - action.value,
    };
  }),
  on(renameOwner, (state,payload) => {
    return {
      ...state,
      owner: payload.owner,
    };
  })
);

export function counterReducer(state: any, action: any) {
  return createCounterReducer(state, action);
}
