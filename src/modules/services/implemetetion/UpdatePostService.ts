import 'reflect-metadata'
import { inject, injectable } from "tsyringe";
import { IPostDTO, IPostRepository } from "../../repository/IPostRespository";
import { IUpdatePostService } from "../IUpdatePostService";

@injectable()
export class UpdatePostService implements IUpdatePostService{
    constructor(
        @inject('PostRepository')
        private postRepository : IPostRepository){}

    async execute(post: IPostDTO): Promise<void> {
        await this.postRepository.update(post)
    }
}