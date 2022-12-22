import { Request,Response } from "express";
import { container } from "tsyringe";
import { RefreshToken } from "../services/implemetetion/RefreshTokenService";
import { IRefreshToken } from "../services/IRefreshTokenService";

export class RefreshTokenController{
    constructor(private refreshTokenService:IRefreshToken = container.resolve(RefreshToken)){

    }

    async handle(request:Request,response:Response):Promise<Response>{
        const {refreshToken} = request.body
        const responseToken =await this.refreshTokenService.execute(refreshToken)
        return response.status(200).json(responseToken)
    }
}

export default new RefreshTokenController()