import { createFeatureSelector, createSelector } from "@ngrx/store"
import { BlogModel, Blogs_List } from "./blog.model"

export const getBlogFeatureSelector=createFeatureSelector<Blogs_List>('blog')

/* export const getBlogTitleSelector=createSelector(getBlogFeatureSelector,(state)=>state.title)

export const getBlogDescriptionSelector = createSelector(
  getBlogFeatureSelector,
  state => state.description
); */


export const getBlogSelector = createSelector(
         getBlogFeatureSelector,
         state =>  state.Blogs_ListObj
       );


