import 'reflect-metadata'
import { container,delay } from "tsyringe";
import { PostRepository } from '../../modules/repository/implemetetion/PostRepository';
import { UserRepository } from "../../modules/repository/implemetetion/UserRepository";
import { IPostRepository } from '../../modules/repository/IPostRespository';
import { IUserRepository } from "../../modules/repository/IUserRepository";

/*container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)*/

container.registerSingleton<IPostRepository>(
    "PostRepository",
    PostRepository
)