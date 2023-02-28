import { Request,Response } from "express";
import { container } from "tsyringe";
import { RefreshToken } from "../services/implemetetion/RefreshTokenService";
import { IRefreshToken } from "../services/IRefreshTokenService";

export class RefreshTokenController{
    constructor(private refreshTokenService:IRefreshToken = container.resolve(RefreshToken)){

    }

    handle(request:Request,response:Response):Response{
        const refreshToken =request.cookies['refresh-token']

        const responseToken =this.refreshTokenService.execute(refreshToken)
        
        return response.status(200).json(responseToken)
    }
}

export default new RefreshTokenController()