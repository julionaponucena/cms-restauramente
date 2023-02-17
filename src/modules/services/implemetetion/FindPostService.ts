import { inject, injectable } from "tsyringe";
import { AppError } from "../../../erros/AppError";
import { Post } from "../../models/Post";
import { IPostRepository } from "../../repository/IPostRespository";
import { IFindPostService } from "../IFindPostService";

@injectable()
export class FindPostService implements IFindPostService{
    constructor(@inject('PostRepository')
    private postRepository : IPostRepository){}

    async execute(post:Partial<Post>):Promise<Post>{
      const actualPost = await this.postRepository.findOneBy(post)

      if(!actualPost){
        throw new AppError('Post not found',422)
      }

      return actualPost
    }
}