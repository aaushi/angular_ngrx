import { createAction, props } from '@ngrx/store';

export const increment = createAction('incrementtt');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customOperation = createAction(
  'customOperation',
  props<{ value: number; selected: string }>()
);
