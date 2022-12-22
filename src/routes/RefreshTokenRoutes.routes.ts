import { Router } from "express";
import refreshTokenController from "../modules/controllers/RefreshTokenController";

const refreshTokenRoutes = Router()

refreshTokenRoutes.post("/",(req,res)=>refreshTokenController.handle(req,res))

export { refreshTokenRoutes}