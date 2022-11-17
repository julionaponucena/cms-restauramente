import { inject,injectable } from "tsyringe";
import { IUserDTO, IUserRepository } from "../../repository/IUserRepository";
import { AppError } from "../../../erros/AppError";
import { IUserService } from "../IUserService";

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

        
}