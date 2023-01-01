import { inject, injectable, registry } from "tsyringe";
import { Query, Resolver } from "type-graphql";
import { Post } from "../inputs/Post";
import { IListPostService } from "../services/IListPostService";
import { ListPostService } from "../services/implemetetion/ListPostService";


@Resolver()
@registry([{token:'postService',useClass:ListPostService}])
@injectable()
export class PostResolver {
    constructor(@inject('postService')private  postService?: IListPostService){}
    @Query(()=> [Post])
    posts (){
        if(!this.postService) throw new  Error('')
        return this.postService.execute()
    }
}