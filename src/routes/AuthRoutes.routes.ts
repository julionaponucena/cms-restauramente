import 'reflect-metadata'
import { Router } from 'express'
import {AuthController} from '../modules/controllers/AuthController'

const authRoutes = Router()
console.log('chegou routes')
const authController = new AuthController()
authRoutes.post('/',(req,res)=>authController.handle(req,res))

export {authRoutes}