import { User } from "../models/User"

export interface IUserDTO{
    email:string,
    password:string
}

export interface IUserRepository {
     create({email,password}:IUserDTO):Promise<void>
     findByEmail(email :string):Promise<User | null>
}