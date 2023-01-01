import { verify } from "jsonwebtoken";
import { GenerateSignInTokenn } from "./GenerateSignInToken";
jest.useFakeTimers()
describe('testing generate signIn token service',()=>{
    it('should be able to generate sigin token',()=>{
        const generateSignInToken = new GenerateSignInTokenn()

        const {signInToken} =generateSignInToken.execute()

        const secretToken = process.env.SECRET_SIGN_IN_TOKEN

        if(!secretToken){
            throw new Error('token is missing')
        }

        expect(typeof signInToken).toBe('string')
        expect(()=>verify(signInToken,secretToken)).not.toThrow()
    })
})