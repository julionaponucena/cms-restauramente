import { container } from "tsyringe"
import { Request,Response } from "express"
import { IUpdatePostService } from "../services/IUpdatePostService"
import { UpdatePostService } from "../services/implemetetion/UpdatePostService"

export class UpdatePostController{
    private updatePostService:IUpdatePostService

    constructor(){
        this.updatePostService = container.resolve(UpdatePostService)
    }

    async handle(request:Request,response:Response):Promise<Response>{
        const post = request.body
        
        await this.updatePostService.execute(post)

        return response.status(200).send()
    }
}

export default new UpdatePostController()