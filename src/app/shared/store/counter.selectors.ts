import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterModel } from './counter.model';

export const getCounterFeature = createFeatureSelector<counterModel>('counter');

export const getCounterValueFromState = createSelector(
  getCounterFeature,
  state => state.counter
);

export const getCounterOwnerFromState = createSelector(
  getCounterFeature,
  state => state.owner
);
