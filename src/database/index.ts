import 'reflect-metadata'
import { DataSource } from "typeorm";
import { Post } from '../modules/models/Post';
import { User } from "../modules/models/User";
import {config} from 'dotenv'

config()

export const dataSource = new DataSource({
    type:"mongodb",
    url:process.env.MONGO_URL,
    database:'teste',
    synchronize:true,
    logging:['query','error'],
    entities:[User,Post ],
    useUnifiedTopology:true,
    
    migrations:[`${__dirname}\\migrations\\*.{ts,js}`],
        
})