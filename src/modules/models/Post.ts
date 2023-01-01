import { Entity,Column,ObjectIdColumn,  } from "typeorm";
import {ObjectId} from "mongodb"
import { IPostDTO } from "../repository/IPostRespository";

@Entity("Posts")
export class Post{
    @ObjectIdColumn()
    id:string
    @Column({nullable:true,unique:true})
    title:string

    @Column({default:false})
    isPublicated:boolean

    @Column()
    metaDescription:string

    @Column()
    metaKey:string

    @Column()
    content:string

    constructor(id:string,t:string,isP:boolean,metaD:string,metaK:string,c:string){
        this.id = id
        this.title = t
        this.isPublicated = isP
        this.metaDescription = metaD
        this.metaKey = metaK
        this.content = c
    }

    /*update({content,metaKey,title,metaDescription}:IPostDTO):void{
        this.content=content
        this.metaKey = metaKey
        this.title = title
        this.metaDescription = metaDescription
    }*/
}