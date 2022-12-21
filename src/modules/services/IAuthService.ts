import { IListUserDto } from "../dtos/ListUserDto"

export interface ResponseLogin{
    token:string
}

export interface IAuthService{

    login ({email,password}:IListUserDto):Promise<ResponseLogin>
}