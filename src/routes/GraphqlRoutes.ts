import path from  'path'
import { container } from 'tsyringe'
import {buildSchema} from 'type-graphql'
import { PostResolver } from '../modules/resolvers/PostResolver'

export async function getSchema() {
    const postResolver = new PostResolver()
    const schema =await buildSchema({
        resolvers:[PostResolver],
        container:{get:(cls)=>container.resolve(cls)},
        emitSchemaFile:path.resolve(__dirname,'../../../schema.gql')
    })
    return schema
}
