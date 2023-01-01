import {ObjectID} from 'typeorm'
import { Post } from "../models/Post"
import{ICreatePostDTO} from '../dtos/CreatePostDto'

export interface IPostDTO{
    id:string
    title:string
    content:string
    metaKey:string
    metaDescription:string
}

export interface IPostRepository{
    create({title,content,metaKey,metaDescription}:ICreatePostDTO):Promise<void>

    findByTitle(title :string):Promise<Post | null>

    list():Promise<Post[]>

    update(post:IPostDTO):Promise<void>

    findById(id:string):Promise<Post |null>

    deleteById(post:string):Promise<void>
}