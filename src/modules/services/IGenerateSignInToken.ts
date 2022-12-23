export interface IGenerateSignInResponse{
    signInToken:string
}


export interface IGenererateSignInToken{
    execute():IGenerateSignInResponse
}