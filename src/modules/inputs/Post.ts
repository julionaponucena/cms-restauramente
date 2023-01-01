import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Post {
    @Field(type =>ID)
    id:string

    @Field()
    title:string

    @Field()
    content:string

    @Field()
    isPublicated:boolean

    @Field()
    metaDescription:string

    @Field()
    metaKey:string

    constructor(id:string,t:string,isP:boolean,metaD:string,metaK:string,c:string){
        this.id = id
        this.title = t
        this.isPublicated = isP
        this.metaDescription = metaD
        this.metaKey = metaK
        this.content = c
    }
}