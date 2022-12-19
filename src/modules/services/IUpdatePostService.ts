import { IPostDTO } from "../repository/IPostRespository";


export interface IUpdatePostService {
    execute(post :IPostDTO):Promise<void>
}