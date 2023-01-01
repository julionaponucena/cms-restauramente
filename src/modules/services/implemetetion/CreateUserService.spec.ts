import { CreateUserService } from "./CreateUserService";
import { IUserRepository } from "../../repository/IUserRepository";
jest.useFakeTimers()
const userRepositoryMock : jest.Mocked<IUserRepository>={
    create:jest.fn(),
    findByEmail:jest.fn()
}

describe('testing create user service', ()=>{
    it("should be able to create user if user doesn't exist ",async()=>{
        const createUserService = new CreateUserService(userRepositoryMock)
        userRepositoryMock.findByEmail.mockResolvedValue(Promise.resolve(null))
        userRepositoryMock.create.mockResolvedValue(Promise.resolve())
        
        await createUserService.execute({email:"teste@example.com",password:'123'})

        expect(()=>createUserService.execute({email:"teste@example.com",password:'123'})).resolves
        expect(userRepositoryMock.findByEmail).toBeCalledTimes(1)
        expect(userRepositoryMock.create).toBeCalledTimes(1)
    })
    
    it("should not be able to create user if him alredy exist",async ()=>{
        const createUserService = new CreateUserService(userRepositoryMock)
        userRepositoryMock.findByEmail.mockResolvedValue({
            email:'teste@example.com',password:'123',id:'1'})
         
        expect(()=>createUserService.execute({email:'teste@example.com',password:'123'})).rejects
        expect(userRepositoryMock.create).not.toBeCalled()
    })
})