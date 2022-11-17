import { Router } from 'express'
import '../shared/container'
import userController from '../modules/controllers/implemetetion/UserController'

const userRouter = Router()

userRouter.post('/',(req,res)=>userController.post(req,res))

export { userRouter}