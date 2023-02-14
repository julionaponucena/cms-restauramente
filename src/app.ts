import express from 'express'
import { router } from "./routes";
import { errorMidleware } from './middlewares/error'
import bodyParser from 'body-parser';
import cookiesParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false ,}))
//app.use(express.json())
/*app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
    res.setHeader('Access-Control-Request-Method','GET, POST, PUT, DELETE, OPTIONS, HEAD')
    res.setHeader('Origin','*')
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader('Access-Control-Allow-Credentials','true')
    res.setHeader('Access-Control-Request-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization')
    next();
})*/
app.use(cors({
    methods:'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    origin:'http://localhost:3000',
    allowedHeaders:"Origin, X-Requested-With, Content-Type, Accept, Authorization",
    preflightContinue:false,
    credentials:true,

}))
app.use(cookiesParser())
app.use(router)
app.use(errorMidleware)

export {app}