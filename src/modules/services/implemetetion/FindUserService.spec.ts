import { FindUserService } from "./FindUserService";
import { IUserRepository } from "../../repository/IUserRepository";

const userRepositoryMock : jest.Mocked<IUserRepository> ={
    create: jest.fn(),
    findByEmail: jest.fn()
}

describe('testing find user service', ()  =>{
    it('should be able to return some user data if him exist',async ()=>{
        const findUserService = new FindUserService(userRepositoryMock)
        userRepositoryMock.findByEmail.mockResolvedValue(
            {id:'1',email:"teste@example.com",password:'123'})

        const user =await findUserService.findByEmail('teste@example.com')

        expect(user).toHaveProperty('id')
        expect(user).toHaveProperty('email')
        expect(user).toHaveProperty('password')
        expect(user?.id).toBe('1')
        expect(user?.email).toBe('teste@example.com')
        expect(user?.password).toBe('123')
        expect(user).toBeTruthy()
        expect(userRepositoryMock.findByEmail).toBeCalledTimes(1)
    })

    it('should able to return null if not exist the insert user',async()=>{
        const findUserService = new FindUserService(userRepositoryMock)
        userRepositoryMock.findByEmail.mockResolvedValue(Promise.resolve(null))
        const user =await findUserService.findByEmail('teste@example.com')

        expect(user).toBeNull()
        expect(userRepositoryMock.findByEmail).toBeCalledTimes(1)
    })
})