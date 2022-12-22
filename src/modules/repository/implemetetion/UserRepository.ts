import {  MongoRepository,Equal } from "typeorm";
import { injectable, singleton } from "tsyringe";
import {hash} from 'bcrypt'
import { IUserRepository } from "../IUserRepository";
import { CreateUserDTO } from "../../dtos/UserDto";
import { dataSource } from "../../../database";
import { User } from "../../models/User";

@injectable()
export class UserRepository implements IUserRepository{
    private appData:MongoRepository<User>

    constructor(){
        this.appData = dataSource.getMongoRepository(User)
    }

    async create({ email, password }: CreateUserDTO): Promise<void> {
        const hashPassword =await hash(password,258)
        await this.appData.save({email,password:hashPassword})

    }

    async findByEmail(email:string): Promise<User | null> {

        return await this.appData.findOneBy({email})
    }
    
}