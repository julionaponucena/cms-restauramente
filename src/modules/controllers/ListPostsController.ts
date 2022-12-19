import { container } from "tsyringe"
import { Request,Response } from "express"
import { IListPostService } from "../services/IListPostService"
import { ListPostService } from "../services/implemetetion/ListPostService"

export class ListPostsController{
    private listPostService: IListPostService
    constructor(){
        this.listPostService = container.resolve(ListPostService)
    }

    async handle(request:Request,response:Response):Promise<Response>{
        const posts =await this.listPostService.execute()

        return response.status(200).json(posts)
    }
}

export default new ListPostsController()