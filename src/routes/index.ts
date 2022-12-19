import { Router } from "express";
import { userRouter } from "./userRoutes.routes";
import { postRouter } from "./PostRoutes.routes";
import { authRoutes } from "./AuthRoutes.routes";

const router = Router()
router.use('/user',userRouter)
router.use('/post',postRouter)
router.use('/auth',authRoutes)

export {router}