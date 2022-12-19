import { container, injectable } from "tsyringe";
import {compare,} from 'bcrypt'
import { AppError } from "../../../erros/AppError";
import { IUserDTO } from "../../repository/IUserRepository";
import { IAuthService } from "../IAuthService";

import { IFindUserService } from "../IFindUserService";
import { FindUserService } from "./FindUserService";

@injectable()
export class AuthService implements IAuthService{
    private findUserService:IFindUserService
    
    constructor(){
        this.findUserService = container.resolve(FindUserService)
    }
    async login({ email, password }: IUserDTO): Promise<void> {
        const user =await this.findUserService.findByEmail(email)

        if(!user){
            throw new AppError('invalid email or password')
        }

        const isValidPassword =await compare(password,user.password)

        if(!isValidPassword){
            throw new AppError('invalid email or password')
        }


    }
}