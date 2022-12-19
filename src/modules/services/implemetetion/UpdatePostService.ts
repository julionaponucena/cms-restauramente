import { inject, injectable } from "tsyringe";
import { IPostDTO, IPostRepository } from "../../repository/IPostRespository";
import { IUpdatePostService } from "../IUpdatePostService";

@injectable()
export class UpdatePostService implements IUpdatePostService{
    constructor(
        @inject('PostRepository')
        private postRepository : IPostRepository){}

    async execute(post: IPostDTO): Promise<void> {
        const alredyExist = await this.postRepository.findByTitle(post.title)

        if(alredyExist){
            throw new Error('Um post com esse titulo já existe')
        }
        await this.postRepository.create(post)
    }
}