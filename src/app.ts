import express from 'express'
import { router } from "./routes";
import { errorMidleware } from './middlewares/error'
import bodyParser from 'body-parser';
import cookiesParser from 'cookie-parser'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false ,}))
//app.use(express.json())
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(cookiesParser())
app.use(router)
app.use(errorMidleware)

export {app}