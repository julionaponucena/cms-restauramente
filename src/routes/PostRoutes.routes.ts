import { Router } from "express";
import postController from "../modules/controllers/PostController";
import createPostController from "../modules/controllers/CreatePostController";
import listPostsController from "../modules/controllers/ListPostsController";
import updatePostController from "../modules/controllers/UpdatePostController"

const postRouter = Router()

postRouter.get('/',(req,res)=>listPostsController.handle(req,res))

postRouter.post('/',(req,res)=>createPostController.handle(req,res))

postRouter.put('/',(req,res)=>updatePostController.handle(req,res))

postRouter.delete('/:id',(req,res)=>postController.delete(req,res))

export {postRouter}