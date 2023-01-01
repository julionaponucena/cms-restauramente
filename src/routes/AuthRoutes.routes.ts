import 'reflect-metadata'
import '../shared/container/'
import { Router } from 'express'
import authController from '../modules/controllers/AuthController'


const authRoutes = Router()
console.log('chegou routes')

authRoutes.post('/',(req,res)=>authController.handle(req,res))

export {authRoutes}