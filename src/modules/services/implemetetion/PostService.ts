import {inject,injectable} from 'tsyringe'
import { Post } from "../../models/Post";
import { IPostDTO, IPostRepository } from "../../repository/IPostRespository";
import { IPostService } from "../IPostService";

@injectable()
export class PostService implements IPostService {
    constructor(
        @inject('PostRepository')
        private postRepository : IPostRepository){}

    async create(post: IPostDTO): Promise<void> {
        const alredyExist = await this.postRepository.findByTitle(post.title)

        if(alredyExist){
            throw new Error('Um post com esse titulo já existe')
        }
        await this.postRepository.create(post)
    }

    async list(): Promise<Post[]> {
        return await this.postRepository.list()
    }

    async update(post :IPostDTO):Promise<void>{
        
        const actualPost =await this.postRepository.findById(post.id)
        console.log(actualPost)
        actualPost?.update(post)
        
        if(actualPost){
        await this.postRepository.update(post)
        }
    }
    async deletePost(id : string):Promise<void>{
        
        
            await this.postRepository.deleteById(id)
    }
}