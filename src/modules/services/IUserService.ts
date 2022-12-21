import { CreateUserDTO } from "../dtos/UserDto"
import { ListUserDto } from "../dtos/ListUserDto"

export interface IUserService {
    create({email,password}:CreateUserDTO):Promise<void>

    findOneByEmail(email :string):Promise<ListUserDto | null>
}