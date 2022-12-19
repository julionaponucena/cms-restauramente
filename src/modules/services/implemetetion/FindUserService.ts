import { inject, injectable } from "tsyringe";
import { User } from "../../models/User";
import { IUserRepository } from "../../repository/IUserRepository";
import { IFindUserService } from "../IFindUserService";

@injectable()
export class FindUserService implements IFindUserService{
    constructor(
        @inject('UserRepository')
        private userRepository:IUserRepository){}

    async findByEmail(email: string): Promise<User | null> {
        return await this.userRepository.findByEmail(email)
    }
}