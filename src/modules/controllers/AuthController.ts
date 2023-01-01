import 'reflect-metadata'
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
        
        this.authService = authService
       
    }

    async handle(request:Request,response:Response):Promise<Response>{
        console.log('chamou o método handle')
        if(!this.authService){
            throw new AppError('internal server error',500)
        }
        const {email,password} = request.body
        const {token,refreshToken} =await this.authService.login({email,password})
        response.cookie('refresh-token',refreshToken,{httpOnly:true})
        return response.status(200).json({token})
    }
}

export default new AuthController()