import { IUserDTO } from "../repository/IUserRepository"
import { User } from "../models/User"

export interface IUserService {
    create({email,password}:IUserDTO):Promise<void>

    findOneByEmail(email :string):Promise<User | null>
}