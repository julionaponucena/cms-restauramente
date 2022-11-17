import 'reflect-metadata'
import { DataSource } from "typeorm";
import { Post } from '../modules/models/Post';
import { User } from "../modules/models/User";

export const dataSource = new DataSource({
    type:"mongodb",
    host:"localhost",
    port:27017 ,
    database:'teste',
    synchronize:true,
    logging:['query','error'],
    entities:[User,Post ],
    useUnifiedTopology:true,
    
    migrations:[`${__dirname}\\migrations\\*.{ts,js}`],
        
})