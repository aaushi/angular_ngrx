import { BlogModel } from "../blog/blog.model";
import { counterModel } from "../counter.model";

export interface AppStateModel{
    counter:counterModel,
    blog:BlogModel[]
}