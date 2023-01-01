import 'reflect-metadata'
import { AppError } from '../../../erros/AppError'
import { IFindUserService } from "../IFindUserService"
import { ResponseLogin } from '../IAuthService'
import { AuthService } from "./AuthService"
import { IGenerateRefreshToken } from '../IGenerateRefreshToken'
jest.useFakeTimers()

//jest.mock('./FindUserService')

const findUserServiceMock : jest.Mocked<IFindUserService>={
    findByEmail : jest.fn()
}

const generateTokenMock : jest.Mocked<IGenerateRefreshToken>={
    execute:jest.fn()
}

describe('test AuthService',()=>{
    
    it('should not be able to generate jwt if email of user are incorrect',()=>{
        
        findUserServiceMock.findByEmail.mockResolvedValue(null)
        generateTokenMock.execute.mockReturnValue("aadadadas")
       const authService = new AuthService(findUserServiceMock,generateTokenMock)
        
        const email = 'teste@example.com'
        const password = '123'
        expect(() =>authService.login({email,password})).rejects.toBeInstanceOf(AppError)
       
       //expect(findUserMock).toHaveBeenCalledWith({})
    })

    it('should not be able to generate jwt if the password of user are incorrect',()=>{
        
        
        findUserServiceMock.findByEmail.mockResolvedValue(Promise.resolve({id:"1",email:"teste@example.com",password:"1234"}))

        generateTokenMock.execute.mockReturnValue("dasdas")

       const authService = new AuthService(findUserServiceMock,generateTokenMock)
        
        const email = 'teste@example.com'
        const password = '123'
        expect(() =>authService.login({email,password})).rejects.toBeInstanceOf(AppError)
       
       
    })
    
    it('should be able to create token and refresh tokens if the email and users are correct',async ()=>{
        findUserServiceMock.findByEmail.mockResolvedValue(Promise.resolve({id:"1",
        email:"teste@example.com",
        password:"$2a$12$3wfmj5LTZwNpLTNfBJPRbuuIXl8tN8IjaIqy9FqT3KFpcIzlN6oPG"
        }))

        generateTokenMock.execute.mockReturnValue("asdadasda")

        const authService = new AuthService(findUserServiceMock,generateTokenMock)

        const response =await authService.login({email:"teste@example.com",password:"123"})

        expect(response).toHaveProperty('token')
        expect(typeof response.token).toBe('string')
        expect(typeof response.refreshToken).toBe('string')
        expect(response).toHaveProperty('refreshToken')
        expect(findUserServiceMock.findByEmail).toBeCalled()
    })
})