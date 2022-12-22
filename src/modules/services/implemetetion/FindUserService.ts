import 'reflect-metadata'
import { container, inject, injectable } from "tsyringe";
import { IListUserDto, ListUserDto } from "../../dtos/ListUserDto";
import { User } from "../../models/User";
import { UserRepository } from '../../repository/implemetetion/UserRepository';
import { IUserRepository } from "../../repository/IUserRepository";
import { IFindUserService } from "../IFindUserService";

@injectable()
export class FindUserService implements IFindUserService{
    private userRepository : IUserRepository
    constructor(){
            this.userRepository = container.resolve(UserRepository)
        }

    async findByEmail(email: string): Promise<IListUserDto | null> {
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            return null
        }

        return {id:user.id.toString(),email:user.email,password:user.password}
    }
}