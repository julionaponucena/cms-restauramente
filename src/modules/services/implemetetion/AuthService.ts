import 'reflect-metadata'
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
import { IGenerateRefreshToken } from "../IGenerateRefreshToken";
import { GenerateRefreshToken } from "./GenerateRefreshToken";
import { UserService } from './UserService';
import { IUserService } from '../IUserService';



config()
@injectable()
export class AuthService implements IAuthService{
    //private findUserService:IFindUserService
    //private generateRefreshToken : IGenerateRefreshToken
    constructor(private findUserService:IFindUserService = container.resolve(FindUserService),
        private generateRefreshToken:IGenerateRefreshToken = container.resolve(GenerateRefreshToken)){}
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
              expiresIn:'30s'
          })

          

          const refreshToken = this.generateRefreshToken.execute(user.id) 
          
    
        return {token, refreshToken}
    }
}