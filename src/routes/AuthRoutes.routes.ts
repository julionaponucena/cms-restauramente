import { Router } from 'express'
import authController from '../modules/controllers/AuthController'

const authRoutes = Router()

authRoutes.post('/',(req,res)=>authController.handle(req,res))

export {authRoutes}