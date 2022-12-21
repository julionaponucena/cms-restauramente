import { User } from "../models/User"
import { CreateUserDTO } from "../dtos/UserDto"



export interface IUserRepository {
     create({email,password}:CreateUserDTO):Promise<void>
     findByEmail(email :string):Promise<User | null>
}