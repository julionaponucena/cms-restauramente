import { IUserDTO } from "../repository/IUserRepository";

export interface ICreateUserService{
    execute({email,password}:IUserDTO):Promise<void>
}