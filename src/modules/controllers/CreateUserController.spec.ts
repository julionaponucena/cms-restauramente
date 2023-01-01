import supertest from 'supertest'
import { CreateUserController } from "./CreateUserService";
import { app } from '../../app';

jest.mock("./CreateUserService")
const handle = jest.fn()
CreateUserController.prototype.handle= handle

describe('testing create user controller',()=>{
    it('should able to response 200 if are ok',async()=>{
        handle.mockResolvedValue({})

       /* const email = 'teste@example.com'
        const password = '123'

      const response =  await supertest(app).post('/user').send({email,password})
      console.log(response)

      expect(response.status).toBe(200)*/
    })
})