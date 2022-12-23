import { verify } from "jsonwebtoken";
import { container } from "tsyringe";
import { AppError } from "../../../erros/AppError";
import { ISignInService } from "../ISignInService";
import { IUserService } from "../IUserService";
import { UserService } from "./UserService";
import {CreateUserDTO} from '../../dtos/UserDto'
import { CreateUserService } from "./CreateUserService";

export class SignInService implements ISignInService{
    constructor(private createUserService : CreateUserService = container.resolve(CreateUserService)){}
    async execute({email,password}:CreateUserDTO): Promise<void> {
        const secretToken = process.env.SECRET_SIGN_IN_TOKEN

        if(!secretToken){
            throw new AppError('internal server error',500)
        }

      

        await this.createUserService.execute({email,password})
    }
}