import { ObjectID } from "mongodb";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../erros/AppError";
import { Post } from "../../models/Post";
import { IPostRepository } from "../../repository/IPostRespository";
import { IFilterService } from "../IFilterService";
import { IFindPostService } from "../IFindPostService";
import { FilterService } from "./FilterService";

type IFiltePost ={
  _id:ObjectID,
  route:string,
  title:string
}

@injectable()
export class FindPostService implements IFindPostService{
    constructor(@inject('PostRepository')
    private postRepository : IPostRepository,
    @inject(FilterService)
    private filterService : IFilterService
    ){}

    async execute(post:Partial<Post>):Promise<Post>{
      const finalId = post.id ? ObjectID(post.id) : undefined
      const initialPost ={...post, _id:finalId,id:undefined}
      
      const filterPost= this.filterService.execute<Partial<Post>>(initialPost) 

      console.log(filterPost)
      const actualPost = await this.postRepository.findOneBy(filterPost)

      if(!actualPost){
        throw new AppError('Post not found',422)
      }

      return actualPost
    }
}