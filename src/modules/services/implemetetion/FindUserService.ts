import 'reflect-metadata'
import { autoInjectable, container, inject, injectable, registry } from "tsyringe";
import { AppError } from '../../../erros/AppError';
import { IListUserDto, ListUserDto } from "../../dtos/ListUserDto";
import { User } from "../../models/User";
import { UserRepository } from '../../repository/implemetetion/UserRepository';
import { IUserRepository } from "../../repository/IUserRepository";
import { IFindUserService } from "../IFindUserService";


@autoInjectable()
@registry([{token:'userRepository',useClass:UserRepository}])
export class FindUserService implements IFindUserService{
    //userRepository : IUserRepository
    constructor(@inject('userRepository') private userRepository? : IUserRepository){
        
          
        }

    async findByEmail(email: string): Promise<IListUserDto | null> {
        console.log('chamou service')
        if(!this.userRepository){
            throw new AppError('internal server error',500)
        }
        const user = await this.userRepository.findByEmail(email)

        if(!user){
            return null
        }
        
        return {id:user.id.toString(),email:user.email,password:user.password}
    }
}