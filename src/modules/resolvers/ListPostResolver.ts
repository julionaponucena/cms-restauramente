import { inject, injectable, registry } from "tsyringe";
import { Query, Resolver,Args, } from "type-graphql";
import {IFieldResolver} from './index'
import { Post } from "../inputs/Post";
import { IListPostService } from "../services/IListPostService";
import { ListPostService } from "../services/implemetetion/ListPostService";


@Resolver()
@injectable()
export class ListPostResolver {
    constructor(@inject(ListPostService)private  postService: IListPostService){}
    @Query(()=> [Post])
    posts (){
        return this.postService.execute()
    }

    
}