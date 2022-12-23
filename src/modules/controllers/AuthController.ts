import { Request, Response } from "express";
import { autoInjectable, container, inject, registry } from "tsyringe";
import { AppError } from "../../erros/AppError";
import { IAuthService } from "../services/IAuthService";
import { IFindUserService } from "../services/IFindUserService";
import { AuthService } from "../services/implemetetion/AuthService";
import { FindUserService } from "../services/implemetetion/FindUserService";

@autoInjectable()
@registry([{token:'authService',useClass:AuthService}])
export class AuthController{
    
    constructor(@inject('authService') private authService? : IAuthService){
        console.log('chegou controller')
        this.authService = authService
       
    }

    async handle(request:Request,response:Response):Promise<Response>{
        if(!this.authService){
            throw new AppError('internal server error',500)
        }
        const {email,password} = request.body
        const tokenResponse =await this.authService.login({email,password})
        return response.status(200).json(tokenResponse)
    }
}

export default container.resolve(AuthController)