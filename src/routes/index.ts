import { Router } from "express";
import { userRouter } from "./userRoutes.routes";
import { postRouter } from "./PostRoutes.routes";
import { authRoutes } from "./AuthRoutes.routes";
import { refreshTokenRoutes } from "./RefreshTokenRoutes.routes";

const router = Router()
router.use('/user',userRouter)
router.use('/post',postRouter)
router.use('/auth',authRoutes)
router.use('/refresh-token',refreshTokenRoutes)

export {router}