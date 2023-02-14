import path from  'path'
import { container } from 'tsyringe'
import {buildSchema} from 'type-graphql'
import { ListPostResolver } from '../modules/resolvers/ListPostResolver'
import { FindPostResolver } from '../modules/resolvers/FindPostResolver'

export async function getSchema() {

    const schema =await buildSchema({
        resolvers:[ListPostResolver,FindPostResolver],
        container:{get:(cls)=>container.resolve(cls)},
        emitSchemaFile:path.resolve(__dirname,'../../../schema.gql')
    })
    return schema
}
