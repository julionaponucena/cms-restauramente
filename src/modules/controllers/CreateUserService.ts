import 'reflect-metadata'
import { Request, Response } from "express";
import { autoInjectable, container, inject, registry } from "tsyringe";
import { AppError } from "../../erros/AppError";
import { ICreateUserService } from "../services/ICreateUserService";
import { CreateUserService } from "../services/implemetetion/CreateUserService";
import { UserService } from "../services/implemetetion/UserService";
import { IUserService } from "../services/IUserService";

@autoInjectable()
@registry([{token:'createUsrService',useClass:CreateUserService}])
export class CreateUserController {
    
    constructor(@inject('createUsrService') private userService?:ICreateUserService){
        
       
    }

    async handle(request:Request,response:Response):Promise<Response>{
        if(!this.userService){
            throw new AppError('internal server error',500)
        }
        const {email,password} = request.body
        
        await this.userService.execute({email,password})

        return response.status(201).send()
    }
}