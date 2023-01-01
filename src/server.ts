import 'reflect-metadata'
import 'express-async-errors'
import './shared/container/'
import {graphqlHTTP} from 'express-graphql'
import { dataSource } from "./database";
import { app } from './app';
import {getSchema} from './routes/GraphqlRoutes'

dataSource.initialize().then(runDB).catch(error=>console.error(error)).then(
    run
)

async function runDB(){
    console.log('rodando migrate')
 //await dataSource.runMigrations()
}

async function run(){
    const schema = await getSchema()
    app.use('/graphql',graphqlHTTP({schema}))
    console.log('iniciando api')
    
   app.listen(3333,()=>console.log('api rodando!'))

}