import { CreateUserDTO } from '../dtos/UserDto'

export interface ResponseLogin{
    token:string
    refreshToken:string
}

export interface IAuthService{

    login ({email,password}:CreateUserDTO):Promise<ResponseLogin>
}