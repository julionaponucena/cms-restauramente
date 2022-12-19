import { inject,injectable } from "tsyringe";
import { IUserDTO, IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../../erros/AppError";
import { IUserService } from "../IUserService";
import { User } from "../../models/User";

@injectable()
export class UserService implements IUserService{

    constructor(
        @inject('UserRepository')
        private userRepository:IUserRepository){}

    async create({ email, password }: IUserDTO): Promise<void> {
       
        const alredyExist =await this.userRepository.findByEmail(email)

        if(alredyExist){
            throw new AppError('Esse email já existe')
        }

        await this.userRepository.create({email,password})
    }

    async findOneByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findByEmail(email)
    }

        
}