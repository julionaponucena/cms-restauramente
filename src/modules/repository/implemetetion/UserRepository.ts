import {  MongoRepository,Equal, DataSource } from "typeorm";
import { autoInjectable, container, injectable, registry, singleton } from "tsyringe";
import {hash} from 'bcrypt'
import { IUserRepository } from "../IUserRepository";
import { CreateUserDTO } from "../../dtos/UserDto";
import { dataSource } from "../../../database";
import { User } from "../../models/User";
import { AppError } from "../../../erros/AppError";

@autoInjectable()
@registry([{token:MongoRepository,useValue:dataSource.getMongoRepository(User)}])
export class UserRepository implements IUserRepository{
    //rivate appData:MongoRepository<User>

    constructor(private appData?:MongoRepository<User>){
    
        
        //this.appData = container.resolve('userRepo')
        
        
    }

    async create({ email, password }: CreateUserDTO): Promise<void> {
        if(!this.appData){
            throw new AppError('internal server error',500)
        }
        const hashPassword =await hash(password,258)
        await this.appData.save({email,password:hashPassword})

    }

    async findByEmail(email:string): Promise<User | null> {
        if(!this.appData){
            throw new AppError('internal server error',500)
        }
        return await this.appData.findOneBy({email})
    }
    
}