import { createReducer, on } from '@ngrx/store';
import { BlogInitialState } from './blog.state';
import { addBlog, loadBlog, updateBlog } from './blog.actions';

export const blogReducer = createReducer(
         BlogInitialState,
         on(loadBlog, state => {
           return {
             ...state
           };
         }),
         on(addBlog, (state, payload) => {
           const blogInp = { ...payload.blogInput };
           blogInp.id = state.Blogs_ListObj.length + 1;
           return {
             ...state,
             Blogs_ListObj: [...state.Blogs_ListObj, blogInp]
           };
         }),
         on(updateBlog, (state, payload) => {
           const updatedBlogData = { ...payload.blogInput };
           const updatedBlog = state.Blogs_ListObj.map((b)=>b.id===payload.blogInput.id?updatedBlogData:b)
           return {
             ...state,
             Blogs_ListObj: updatedBlog
           };
         })
       );

export function createBlogReducer(state: any, action: any) {
  return blogReducer(state, action);
}
