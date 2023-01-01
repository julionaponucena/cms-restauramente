import { SignInService } from "./SignInService";
import {ICreateUserService} from '../ICreateUserService'
jest.useFakeTimers()
const createUserServiceMock : jest.Mocked<ICreateUserService> = {
    execute: jest.fn()
} 

describe('testing signIn service',()=>{
    it('should be able to create new User',async()=>{
        const signInService = new SignInService(createUserServiceMock)
        createUserServiceMock.execute.mockResolvedValue()
        const email ='teste@example.com'
        const password = '123'
        signInService.execute({email,password})

        expect(()=>signInService.execute({email,password})).resolves
        expect(createUserServiceMock.execute).toBeCalledTimes(1)
    })
})