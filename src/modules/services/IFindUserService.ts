import { IListUserDto, ListUserDto } from "../dtos/ListUserDto";
import { User } from "../models/User";

export interface IFindUserService{
    findByEmail(email:string):Promise<IListUserDto| null>
}