export interface BlogModel{
    id:number,
    title:string,
    description:string
}

export interface Blogs_List{
    Blogs_ListObj:BlogModel[];
}