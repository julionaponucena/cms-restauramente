import { Router } from "express";
import generateSignInController from "../modules/controllers/GenerateSignInTokenController";
import { authentication } from "../middlewares/authentication";


const generateSigInTokenRoutes = Router()

generateSigInTokenRoutes.use(authentication)

generateSigInTokenRoutes.get('/',(req,res)=>generateSignInController.handle(req,res))

export {generateSigInTokenRoutes}