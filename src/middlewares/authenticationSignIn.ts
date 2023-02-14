import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../erros/AppError";
import { config } from "dotenv";

config()
export function authenticationSignIn(request:Request,response:Response,next:NextFunction){
    const signInToken = request.headers.authorization
    console.log(response.getHeaders())
    if(!signInToken){
        throw new AppError('token is missing',401)
    }
    const token = signInToken.split(' ')[1]
    const secretToken = process.env.SECRET_SIGN_IN_TOKEN

    if(!secretToken){
        throw new AppError('internal server error',500)
    }
    try{
        verify(token,secretToken)
        return next()
    }catch(error){
        throw new AppError('invalid token',401)
    }
}