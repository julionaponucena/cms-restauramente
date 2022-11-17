import { Post } from "../models/Post"
import { IPostDTO } from "../repository/IPostRespository"

export interface IPostService {
    create(post:IPostDTO):Promise<void>

    list():Promise<Post[]>

    update(post :IPostDTO):Promise<void>

    deletePost(post: string):Promise<void>
}