import { CreateUserDTO } from "../dtos/UserDto";

export interface ISignInService{
    execute({email,password}:CreateUserDTO):Promise<void>
}