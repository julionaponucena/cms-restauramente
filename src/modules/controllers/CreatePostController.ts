import { container } from "tsyringe"
import { Request,Response } from "express"
import { PostService } from "../services/implemetetion/PostService"
import { IPostService } from "../services/IPostService"
import { ICreatePostService } from "../services/ICreatePostService"
import { CreatePostService } from "../services/implemetetion/CreatePostService"

export class CreatePostController {
    private createPostService: ICreatePostService
    constructor(){
        this.createPostService = container.resolve(CreatePostService)
    }
    async handle(request:Request,response:Response):Promise<Response>{
        const post = request.body

        await this.createPostService.execute(post)

        return response.status(201).send()
    }
}

export default new CreatePostController()