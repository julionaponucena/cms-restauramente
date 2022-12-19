import { Post } from "../models/Post"

export interface IListPostService{
    execute():Promise<Post[]>
}