import { inject, injectable, registry } from "tsyringe";
import { Resolver,Query,Arg, Root, Args } from "type-graphql";
import { SimpleConsoleLogger } from "typeorm";
import { PostInput } from "../inputs-types/PostInput";
import { Post } from "../inputs/Post";
import { IFindPostService } from "../services/IFindPostService";
import { FindPostService } from "../services/implemetetion/FindPostService";

@Resolver()
@registry([{token:'postService',useClass:FindPostService}])
@injectable()
export class FindPostResolver {
    constructor(
        @inject('postService')
        private postService:IFindPostService
    ){}

    @Query(()=>Post)
    post(
        @Arg("post",{validate:false}) post:PostInput
    ):Promise<Post>{
        function removeEmpty(obj:any): any {
            return Object.fromEntries(
              Object.entries(obj)
                .filter(([_, v]) => v != null)
                .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v])
            );
          }

          console.log(removeEmpty(post))
          console.log(post)
        return this.postService.execute(post)
    }
}