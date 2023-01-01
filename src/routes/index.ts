import { Router } from "express";

import { userRouter } from "./userRoutes.routes";
import { postRouter } from "./PostRoutes.routes";
import { authRoutes } from "./AuthRoutes.routes";
import { refreshTokenRoutes } from "./RefreshTokenRoutes.routes";
import { generateSigInTokenRoutes } from "./GenerateSingInTokenRoutes";
import { signInRouter } from "./SignInRoutes";
import { logoutRoute } from "./LogoutRoutes";

const router = Router()
router.use('/user',userRouter)
router.use('/post',postRouter)
router.use('/auth',authRoutes)
router.use('/refresh-token',refreshTokenRoutes)
router.use('/generate-sign-in-token',generateSigInTokenRoutes)
router.use('/sign-in',signInRouter)
router.use('/logout',logoutRoute)

export {router}