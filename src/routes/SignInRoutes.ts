import { Router } from "express";
import signInController from "../modules/controllers/SignInController";
import { authenticationSignIn } from "../middlewares/authenticationSignIn";

const signInRouter = Router()

signInRouter.use(authenticationSignIn)

signInRouter.post('/',(req,res)=> signInController.handle(req,res))

export {signInRouter}