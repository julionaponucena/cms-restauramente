import { config } from "dotenv";
import { sign } from "jsonwebtoken";
import { injectable } from "tsyringe";
import { AppError } from "../../../erros/AppError";
import { IGenerateRefreshToken } from "../IGenerateRefreshToken";

config()
@injectable()
export class GenerateRefreshToken implements IGenerateRefreshToken {
    execute(id: string): string {
        const secretToken =process.env.SECRET_REFRESH_TOKEN
        if(!secretToken){
            throw new AppError('token missing',500)
        }
        return sign({},secretToken,{
            subject:id,
            expiresIn:'1h'
        }) 
    }   
}