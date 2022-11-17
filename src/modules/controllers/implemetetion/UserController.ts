import { Request,Response } from "express";
import {container} from 'tsyringe'
import { UserService } from "../../services/implemetetion/UserService";
import { IUserService } from "../../services/IUserService";

export class UserController{
    private userService:IUserService
    constructor(){
        this.userService = container.resolve<IUserService>(UserService)
        //this.userService.create({email:'asdsadas',password:'123'})
    }

    async post(request:Request,response:Response):Promise<Response>{
        const {email,password} = request.body
        
        await this.userService.create({email,password})

        return response.status(201).send()
    }

}

export default new UserController()