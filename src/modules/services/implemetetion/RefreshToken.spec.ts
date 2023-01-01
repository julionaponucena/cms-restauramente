import 'reflect-metadata'
import {config} from 'dotenv'
import { sign } from "jsonwebtoken";
import { RefreshToken } from "./RefreshTokenService";
jest.useFakeTimers()

config()
describe('RefreshTokenService',()=>{
    it('should able to generate token',()=>{
        const secretToken = process.env.SECRET_REFRESH_TOKEN
        if(!secretToken){
            throw new Error('token is missing')
        }
        const refreshToken = sign({},secretToken,{
            subject:'asasda',
            expiresIn:'20s'
        })

        const refreshTokenService = new RefreshToken()
        const {token} = refreshTokenService.execute(refreshToken)

        expect(typeof token).toBe('string')
    })

    it('should not able to create token if token is missing',()=>{
        const refreshTokenService = new RefreshToken()

        expect(()=>refreshTokenService.execute('')).toThrow()
    })
})