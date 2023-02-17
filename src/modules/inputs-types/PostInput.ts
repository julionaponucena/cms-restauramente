import { Field, ID, InputType } from "type-graphql";
import { Post } from "../inputs/Post";

@InputType()
export class PostInput implements Partial<Post>{
    @Field(type =>ID,{nullable:true,})
    id?:string | undefined

    @Field({nullable:true,})
    title?:string

    @Field({nullable:true})
    route?:string

    constructor(id:string,title:string,route:string){
        this.id=id
        this.title=title
        this.route=route
    }
}