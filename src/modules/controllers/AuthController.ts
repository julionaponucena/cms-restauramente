import { Request, Response } from "express";
import { container } from "tsyringe";
import { IAuthService } from "../services/IAuthService";
import { IFindUserService } from "../services/IFindUserService";
import { AuthService } from "../services/implemetetion/AuthService";
import { FindUserService } from "../services/implemetetion/FindUserService";

export class AuthController{
    private authService:IAuthService
    constructor(){
        this.authService = container.resolve(AuthService)
    }

    async handle(request:Request,response:Response):Promise<Response>{
        const {email,password} = request.body
        const tokenResponse =await this.authService.login({email,password})
        return response.status(200).json(tokenResponse)
    }
}

export default new AuthController()