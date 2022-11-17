import { Request,Response } from "express";
import {container} from 'tsyringe'
import { PostService } from "../services/implemetetion/PostService";
import { IPostService } from "../services/IPostService";

export class PostController{
    private postService : IPostService
    constructor(){
        this.postService = container.resolve(PostService)
    }

    async get(request:Request,response:Response):Promise<Response>{
        const posts =await this.postService.list()

        return response.status(200).json(posts)
    }

    async post(request:Request,response:Response):Promise<Response>{
        const post = request.body

        await this.postService.create(post)

        return response.status(201).send()
    }

    async put(request:Request,response:Response):Promise<Response>{
        const post = request.body
        
        await this.postService.update(post)

        return response.status(200).send()
    }

    async delete(request:Request,response:Response):Promise<Response>{
        const {id} = request.params
        await this.postService.deletePost(id)

        return response.status(200).send()
    }
}

export default new PostController()