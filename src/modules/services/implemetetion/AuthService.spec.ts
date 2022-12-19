import { AuthService } from "./AuthService"

describe('test AuthService',()=>{
    jest.mock('./FindUserService"')
    it('should not be able to generate jwt if email of user are incorrect',()=>{
       const authService = new AuthService() 
    })
})