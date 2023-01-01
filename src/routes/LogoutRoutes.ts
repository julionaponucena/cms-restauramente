import { Router } from "express";
import logoutController from "../modules/controllers/LogoutController";

const logoutRoute = Router()

logoutRoute.post('/',(req,res)=> logoutController.handle(req,res))

export {logoutRoute}