import { inject, registry } from "tsyringe";
import { Resolver,Query } from "type-graphql";
import { Post } from "../inputs/Post";
import { IFindPostService } from "../services/IFindPostService";
import { FindPostService } from "../services/implemetetion/FindPostService";

@Resolver()
@registry([{token:'postService',useClass:FindPostService}])
export class FindPostResolver {
    constructor(
        @inject('postService')
        private postService:IFindPostService
    ){}

    @Query(()=>Post)
    post(_:any, args :Partial<Post>){
        return this.postService.execute(args)
    }
}