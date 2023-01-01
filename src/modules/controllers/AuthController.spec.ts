 
import { IAuthService} from '../services/IAuthService'
import requesta from 'supertest'
import { AuthController } from './AuthController'
import {app} from '../../app'


jest.mock('./AuthController')

const handle = jest.fn()
AuthController.prototype.handle=handle
const service :jest.Mocked<IAuthService> ={
    login:jest.fn()
}
const authController = new AuthController(service)
authController.handle = handle
 
describe('testing auth service controller',()=>{
    
    it('should be able to receivd request and return a response 200 if all be ok',async  ()=>{
        
        const email = 'teste@example.com'
        const password = '123'

        

        handle.mockResolvedValue({})
     
        const resposta = await requesta(app).post('/auth').send({email,password}).expect(200)
    
        expect(resposta.status).toBe(200)
        expect(resposta.body).toHaveProperty('token')
        expect(resposta.body).toHaveProperty('refreshToken')
    })
    
})