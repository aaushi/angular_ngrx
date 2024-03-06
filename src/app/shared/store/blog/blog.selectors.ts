import { createFeatureSelector, createSelector } from "@ngrx/store"
import { BlogModel } from "./blog.model"

export const getBlogFeatureSelector=createFeatureSelector<BlogModel[]>('blogReducer')

/* export const getBlogTitleSelector=createSelector(getBlogFeatureSelector,(state)=>state.title)

export const getBlogDescriptionSelector = createSelector(
  getBlogFeatureSelector,
  state => state.description
); */


export const getBlogSelector = createSelector(
  getBlogFeatureSelector,
  (state) =>  state
);
