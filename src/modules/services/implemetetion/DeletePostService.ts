import 'reflect-metadata'
import { inject } from "tsyringe";
import { IPostRepository } from "../../repository/IPostRespository";
import { IDeletePostService } from "../IDeletePostService";

export class DeletePostService implements IDeletePostService{
    constructor(
        @inject('PostRepository')
        private postRepository : IPostRepository){}

    async execute(id : string):Promise<void>{
        await this.postRepository.deleteById(id)
    }
}