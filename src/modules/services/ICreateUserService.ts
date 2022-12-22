import{CreateUserDTO} from '../dtos/UserDto'

export interface ICreateUserService{
    execute({email,password}:CreateUserDTO):Promise<void>
}