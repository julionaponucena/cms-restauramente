export interface ResponseRefreshToken {
    token:string
}

export interface IRefreshToken{
    execute(refresh_token:string):ResponseRefreshToken
}