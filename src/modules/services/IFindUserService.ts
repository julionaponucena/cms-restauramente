import { User } from "../models/User";

export interface IFindUserService{
    findByEmail(email:string):Promise<User | null>
}