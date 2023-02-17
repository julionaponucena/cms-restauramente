import { Post } from "../models/Post";

export interface IFindPostService {
    execute(post: Partial<Post>):Promise<Post>
}