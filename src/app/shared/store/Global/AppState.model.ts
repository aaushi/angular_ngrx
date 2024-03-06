import { BlogModel, Blogs_List } from "../blog/blog.model";
import { counterModel } from "../counter.model";

export interface AppStateModel{
    counter:counterModel,
    blog:Blogs_List
}