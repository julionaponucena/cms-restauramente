import 'reflect-metadata'
import { verify,sign } from "jsonwebtoken";
import { injectable } from "tsyringe";
import { AppError } from "../../../erros/AppError";
import { IRefreshToken } from "../IRefreshTokenService";
import { ResponseRefreshToken } from "../IRefreshTokenService";

@injectable()
export class RefreshToken implements IRefreshToken{
    execute(refresh_token: string): ResponseRefreshToken {
        const secretRefreshToken = process.env.SECRET_REFRESH_TOKEN
        if(!secretRefreshToken){
            throw new AppError('dont eable to create refresh token',500)
        }
        let token:string =''
        try{
        const decoded = verify(refresh_token,secretRefreshToken)
        
        const secretAuthToken = process.env.SECRET_AUTH_TOKEN

        if(!secretAuthToken){
            throw new AppError('dont eable to create refresh token',500)
        }
        
        const tokenContent = sign({},secretAuthToken,{
            expiresIn:'30s',
            subject:decoded.sub?.toString()
        })

        token = tokenContent
    }catch(error){
        throw new AppError('token invalid',401)
    }
        if(!token)throw new AppError('internal server error',500)


        return {token}
    }
}