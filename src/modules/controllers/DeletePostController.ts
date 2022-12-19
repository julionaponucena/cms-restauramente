import { container } from "tsyringe"
import { Request,Response } from "express"
import { IDeletePostService } from "../services/IDeletePostService"
import { DeletePostService } from "../services/implemetetion/DeletePostService"

export class DeletePostController{
    private deletePostService:IDeletePostService

    constructor(){
        this.deletePostService= container.resolve(DeletePostService)
    }

    async handle(request:Request,response:Response):Promise<Response>{
        const {id} = request.params
        await this.deletePostService.execute(id)

        return response.status(200).send()
    }
}