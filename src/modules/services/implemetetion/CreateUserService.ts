import 'reflect-metadata'
import { container, inject, injectable, registry,autoInjectable } from "tsyringe";
import { AppError } from '../../../erros/AppError';
import { CreateUserDTO } from "../../dtos/UserDto";
import { UserRepository } from "../../repository/implemetetion/UserRepository";
import { IPostDTO, IPostRepository } from "../../repository/IPostRespository";
import { IUserRepository } from "../../repository/IUserRepository";
import { ICreatePostService } from "../ICreatePostService";
import { ICreateUserService } from "../ICreateUserService";

@autoInjectable()
@registry([{token:'usrRepo',useClass:UserRepository}])
export class CreateUserService implements ICreateUserService{

    constructor(@inject('usrRepo') private userRepository : IUserRepository){}

    async execute(user: CreateUserDTO): Promise<void> {
        const alredExist =await this.userRepository.findByEmail(user.email)
        if(alredExist){
            throw new AppError('User alredy exist')
        }
        await this.userRepository.create(user)
    }
}