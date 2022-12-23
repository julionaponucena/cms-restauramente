import { sign, verify } from "jsonwebtoken";
import { AppError } from "../../../erros/AppError";
import { IGenerateSignInResponse, IGenererateSignInToken } from "../IGenerateSignInToken";

export class GenerateSignInTokenn implements IGenererateSignInToken {
    execute(): IGenerateSignInResponse {
        const secretToken = process.env.SECRET_SIGN_IN_TOKEN

        if(!secretToken){
            throw new AppError('internal server error',500)
        }

        const signInToken = sign({},secretToken,{expiresIn:'4H'})

        verify(signInToken,secretToken)

        return{signInToken}
    }
}