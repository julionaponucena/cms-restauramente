import { Request, Response } from "express";

export class LogoutController {
    handle(request : Request, response:Response):Response{
        response.clearCookie('refresh-token')
        return response.status(200).send()
    }
}

export default new LogoutController()