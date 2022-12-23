import 'reflect-metadata'
import { container,delay } from "tsyringe";
import { PostRepository } from '../../modules/repository/implemetetion/PostRepository';
import { UserRepository } from "../../modules/repository/implemetetion/UserRepository";
import { IPostRepository } from '../../modules/repository/IPostRespository';
import { IUserRepository } from "../../modules/repository/IUserRepository";
import { IFindUserService } from '../../modules/services/IFindUserService';
import { AuthService } from '../../modules/services/implemetetion/AuthService';
import { FindUserService } from '../../modules/services/implemetetion/FindUserService';
import {IAuthService} from '../../modules/services/IAuthService';
import { IGenerateRefreshToken } from '../../modules/services/IGenerateRefreshToken';
import { GenerateRefreshToken } from '../../modules/services/implemetetion/GenerateRefreshToken';
import { MongoRepository } from 'typeorm';
import { dataSource } from '../../database';
import { User } from '../../modules/models/User';
import { DelayedConstructor } from 'tsyringe/dist/typings/lazy-helpers';

container.register<IFindUserService>(
    "IFindUserService",
    {useClass:FindUserService}
)

container.register<IAuthService>(
    "authService",
    {useClass:AuthService}
)

container.register<IGenerateRefreshToken>(
    "IGenerateRefreshToken",
    {useClass:GenerateRefreshToken}
)

container.register<MongoRepository<User>>(
    "userRepo",
    {useValue:dataSource.getMongoRepository(User)}
)
container.register<IUserRepository>(
    'userRepository',
    {useClass:UserRepository}
)
/*container.registerSingleton<IUserRepository>(
    "UserRepository",
    delay(()=>UserRepository)
)*/

container.registerSingleton<IPostRepository>(
    "PostRepository",
    PostRepository
)