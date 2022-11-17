import { Router } from "express";
import postController from "../modules/controllers/PostController";

const postRouter = Router()

postRouter.get('/',(req,res)=>postController.get(req,res))

postRouter.post('/',(req,res)=>postController.post(req,res))

postRouter.put('/',(req,res)=>postController.put(req,res))

postRouter.delete('/:id',(req,res)=>postController.delete(req,res))

export {postRouter}