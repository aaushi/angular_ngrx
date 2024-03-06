import { createReducer, on } from '@ngrx/store';
import { BlogInitialState } from './blog.state';
import { addBlog, loadBlog } from './blog.actions';

export const blogReducer = createReducer(
         BlogInitialState,
         on(loadBlog, state => {
           return {
             ...state
           };
         }),
         on(addBlog, (state,payload) => {
            const blogInp = { ...payload.blogInput};
            blogInp.id= state.Blogs_ListObj.length + 1;
           return {
             ...state,
             Blogs_ListObj:[...state.Blogs_ListObj,blogInp]
           };
         })
       );

export function createBlogReducer(state: any, action: any) {
  return blogReducer(state, action);
}
