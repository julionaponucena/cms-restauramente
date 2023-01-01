import 'reflect-metadata'
import { inject, injectable } from "tsyringe";
import { IPostRepository } from "../../repository/IPostRespository";
import { IPostService } from "../IPostService";
import { Post } from "../../models/Post";
import { IListPostService } from "../IListPostService";

@injectable()
export class ListPostService implements IListPostService {

    constructor(
        @inject('PostRepository')
        private postRepository : IPostRepository){}
        
    async execute():Promise<Post[]>{
        return await this.postRepository.list()
    }
}