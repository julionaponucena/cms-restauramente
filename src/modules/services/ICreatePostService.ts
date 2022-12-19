import { IPostDTO } from "../repository/IPostRespository"

export interface ICreatePostService{
    execute(post:IPostDTO):Promise<void>
}