import { GenerateRefreshToken } from "./GenerateRefreshToken";
import { IPostRepository } from "../../repository/IPostRespository";
import { verify } from "jsonwebtoken";
jest.useFakeTimers()
const postRepositoryMock : jest.Mocked<IPostRepository> ={
    create:jest.fn(),
    deleteById:jest.fn(),
    findById:jest.fn(),
    findByTitle:jest.fn(),
    list:jest.fn(),
    update:jest.fn()
}

describe('testing generate refresh token service',()=>{
    it('should be able to generate refresh token',()=>{
        const generateRefreshToken = new GenerateRefreshToken()
        const token = generateRefreshToken.execute('1')
        const secretToken = process.env.SECRET_REFRESH_TOKEN

        if(!secretToken){
            throw Error('secret is missing')
        }
        expect(typeof token).toBe('string')
        expect(()=>verify(token,secretToken)).not.toThrow()
    })
})