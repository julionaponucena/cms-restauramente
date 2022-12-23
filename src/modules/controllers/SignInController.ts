import { Request, Response } from "express";
import { container } from "tsyringe";
import { SignInService } from "../services/implemetetion/SignInService";
import { ISignInService } from "../services/ISignInService";

export class SignInController {
    constructor(private signInService : ISignInService = container.resolve(SignInService)){}
    async handle(request:Request,response:Response):Promise<Response>{
        const {email,password} = request.body
        await this.signInService.execute({email,password})

        return response.status(201).send()
    }
}

export default new SignInController()