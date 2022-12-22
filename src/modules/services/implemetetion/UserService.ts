import { container, inject,injectable } from "tsyringe";
import {  IUserRepository } from "../../repository/IUserRepository";
import { CreateUserDTO } from "../../dtos/UserDto";
import { ListUserDto } from "../../dtos/ListUserDto";
import { AppError } from "../../../erros/AppError";
import { IUserService } from "../IUserService";
import { UserRepository } from "../../repository/implemetetion/UserRepository";

@injectable()
export class UserService implements IUserService{
    private userRepository:IUserRepository
    constructor(){
        this.userRepository = container.resolve(UserRepository)
    }

    async create({ email, password }: CreateUserDTO): Promise<void> {
       
        const alredyExist =await this.userRepository.findByEmail(email)

        if(alredyExist){
            throw new AppError('Esse email já existe')
        }

        await this.userRepository.create({email,password})
    }

    async findOneByEmail(email: string): Promise<ListUserDto | null> {
        const user = await this.userRepository.findByEmail(email)
        
        if(!user){
            return null
        }
        return new ListUserDto({id:user.id.toString(),email:user.email,password:user.password})
    }

        
}