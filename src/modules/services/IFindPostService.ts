import { Post } from "../models/Post";

export interface IFindPostService {
    execute(args:Partial<Post>):Promise<Post |null>
}