import { inject, injectable } from "tsyringe";
import { Post } from "../../models/Post";
import { IPostRepository } from "../../repository/IPostRespository";
import { IFindPostService } from "../IFindPostService";

@injectable()
export class FindPostService implements IFindPostService{
    constructor(@inject('PostRepository')
    private postRepository : IPostRepository){}

    execute(args:Partial<Post>):Promise<Post | null>{
      return this.postRepository.findOneBy(args)
    }
}