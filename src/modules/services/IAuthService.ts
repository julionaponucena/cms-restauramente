import { IUserDTO } from "../repository/IUserRepository"

export interface IAuthService{

    login ({email,password}:IUserDTO):Promise<void>
}