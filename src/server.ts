import 'reflect-metadata'
import 'express-async-errors'
import { dataSource } from "./database";
import { router } from "./routes";
import { errorMidleware } from './middlewares/error';
import express from "express"

dataSource.initialize().then(runDB).catch(error=>console.error(error)).then(
    run
)

async function runDB(){
    console.log('rodando migrate')
 //await dataSource.runMigrations()
}

function run(){
    console.log('iniciando api')
    const app = express()
    app.use(express.json())
    app.use(router)
    app.use(errorMidleware)

    app.listen(3333,()=>console.log("api rodando!"))
}