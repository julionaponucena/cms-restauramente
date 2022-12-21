import { container, injectable } from "tsyringe";
import {compare,} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { AppError } from "../../../erros/AppError";
import {IListUserDto} from '../../dtos/ListUserDto'
import { IAuthService, ResponseLogin } from "../IAuthService";
import { config } from "dotenv";
import { IFindUserService } from "../IFindUserService";
import { FindUserService } from "./FindUserService";
import { CreateUserDTO } from "../../dtos/UserDto";



config()
@injectable()
export class AuthService implements IAuthService{
    private findUserService:IFindUserService
    
    constructor(findUserService?:IFindUserService | null){
        if(findUserService){
            this.findUserService =findUserService
        }else{
            this.findUserService = container.resolve(FindUserService)
        }
    }
    async login({ email, password }: CreateUserDTO): Promise<ResponseLogin> {
        const user =await this.findUserService.findByEmail(email)

        if(!user){
            throw new AppError('invalid email or password')
        }

        const isValidPassword =await compare(password,user.password)

        if(!isValidPassword){
            throw new AppError('invalid email or password')
        }

        const secretToken = process.env.SECRET_TOKEN
        
        if(!secretToken){
            throw new AppError('we cannot effetuetelogin')
        }

         const token =  sign({},secretToken,{
              subject:user.id,
              expiresIn:'30s'
          })
          
        
        return {token}
    }
}