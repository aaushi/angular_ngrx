import { createReducer, on } from '@ngrx/store';
import { BlogInitialState } from './blog.state';
import { loadBlog } from './blog.actions';

export const blogReducer = createReducer(
  BlogInitialState,
  on(loadBlog, state => {
    return {
      ...state
    };
  })
);

export function createBlogReducer(state: any, action: any) {
  return blogReducer(state, action);
}
