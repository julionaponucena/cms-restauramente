import 'reflect-metadata'
import { autoInjectable, container, inject, injectable, registry } from "tsyringe";
import {compare,} from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { AppError } from "../../../erros/AppError";
import {IListUserDto} from '../../dtos/ListUserDto'
import { IAuthService, ResponseLogin } from "../IAuthService";
import { config } from "dotenv";
import { IFindUserService } from "../IFindUserService";
import { FindUserService } from "./FindUserService";
import { CreateUserDTO } from "../../dtos/UserDto";
import { IGenerateRefreshToken } from "../IGenerateRefreshToken";
import { GenerateRefreshToken } from "./GenerateRefreshToken";
import { UserService } from './UserService';
import { IUserService } from '../IUserService';




@injectable()
@registry([{token:'findUser',useClass:FindUserService},{token:'gen',useClass:GenerateRefreshToken}])
export class AuthService implements IAuthService{
    //private findUserService:IFindUserService
    //private generateRefreshToken : IGenerateRefreshToken
    constructor(@inject('findUser') private findUserService:IFindUserService,@inject('gen') private generateRefreshToken:IGenerateRefreshToken){
        
        
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

        const secretAuthToken = process.env.SECRET_AUTH_TOKEN
        
        if(!secretAuthToken){
            throw new AppError('we cannot effetuetelogin',500)
        }

         const token =  sign({},secretAuthToken,{
              subject:user.id,
              expiresIn:'20s'
          })

          

          const refreshToken = this.generateRefreshToken.execute(user.id) 
          
    
        return {token, refreshToken}
    }
}