import { inject, injectable } from "tsyringe";
import { IPostDTO, IPostRepository } from "../../repository/IPostRespository";
import { ICreatePostService } from "../ICreatePostService";

@injectable()
export class CreateUserService implements ICreatePostService{

    constructor(
        @inject('PostRepository')
        private postRepository : IPostRepository){}

    async execute(post: IPostDTO): Promise<void> {
        
    }
}