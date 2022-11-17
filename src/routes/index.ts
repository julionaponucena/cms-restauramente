import { Router } from "express";
import { userRouter } from "./userRoutes.routes";
import { postRouter } from "./PostRoutes.routes";

const router = Router()
router.use('/user',userRouter)
router.use('/post',postRouter)

export {router}