import { Request, Response } from "express";
import { container } from "tsyringe";
import { IGenererateSignInToken } from "../services/IGenerateSignInToken";
import { GenerateSignInTokenn } from "../services/implemetetion/GenerateSignInToken";

export class GenerateSignInTokenController{
    constructor(private generateTokenService : IGenererateSignInToken = container.resolve(GenerateSignInTokenn)){}

    async handle(request : Request,response: Response):Promise<Response>{
        const {signInToken}=await this.generateTokenService.execute()

        return response.json(signInToken)
    }
}

export default new GenerateSignInTokenController()