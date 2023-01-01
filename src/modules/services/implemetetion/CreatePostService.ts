import 'reflect-metadata'
import {inject,injectable} from 'tsyringe'
import { ICreatePostService } from "../ICreatePostService";
import {  IPostRepository } from "../../repository/IPostRespository";
import { ICreatePostDTO } from '../../dtos/CreatePostDto';

@injectable()
export class CreatePostService implements ICreatePostService{
    

    constructor(@inject('PostRepository')
    private postRepository : IPostRepository){
        
    }

    async execute(post: ICreatePostDTO): Promise<void> {
        const alredyExist = await this.postRepository.findByTitle(post.title)

        if(alredyExist){
            throw new Error('Um post com esse titulo já existe')
        }
        await this.postRepository.create(post)
    }
}