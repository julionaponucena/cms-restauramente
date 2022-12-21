import 'reflect-metadata'
import { AppError } from '../../../erros/AppError'
import { IFindUserService } from "../IFindUserService"
import { AuthService } from "./AuthService"


//jest.mock('./FindUserService')

const findUserServiceMock : jest.Mocked<IFindUserService>={
    findByEmail : jest.fn()
}


describe('test AuthService',()=>{
    
    it('should not be able to generate jwt if email of user are incorrect',()=>{
        
        
        findUserServiceMock.findByEmail.mockResolvedValue(null)
       const authService = new AuthService(findUserServiceMock)
        
        const email = 'teste@example.com'
        const password = '123'
        expect(() =>authService.login({email,password})).rejects.toBeInstanceOf(AppError)
       
       //expect(findUserMock).toHaveBeenCalledWith({})
    })

    it('should not be able to generate jwt if the password of user are incorrect',()=>{
        
        
        findUserServiceMock.findByEmail.mockResolvedValue(Promise.resolve({id:"1",email:"teste@example.com",password:"1234"}))
       const authService = new AuthService(findUserServiceMock)
        
        const email = 'teste@example.com'
        const password = '123'
        expect(() =>authService.login({email,password})).rejects.toBeInstanceOf(AppError)
       
       
    }) 
})