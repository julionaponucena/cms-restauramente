import {MongoRepository,} from 'typeorm'
import { IPostDTO, IPostRepository } from "../IPostRespository";
import { ICreatePostDTO } from '../../dtos/CreatePostDto';
import { Post } from '../../models/Post';
import { dataSource } from '../../../database';
import {ObjectId} from 'mongodb'

export class PostRepository implements IPostRepository{
    private appData:MongoRepository<Post>

    constructor(){
        this.appData = dataSource.getMongoRepository(Post) 
    }

    async create({ title, content, metaKey, metaDescription }: ICreatePostDTO): Promise<void> {
        await this.appData.save({title,content,metaKey,metaDescription})
    }

    async findByTitle(title: string): Promise<Post | null> {
        return await this.appData.findOneBy({title})
    }

    findOneBy(params: Partial<Post>):Promise<Post | null>{
        
        console.log({...params,_id:ObjectId(params.id),id:undefined})
    
        return this.appData.findOneByOrFail({...params,_id:ObjectId(params.id),id:undefined})
    }

    async findById(id:string):Promise<Post |null>{
       
        
        return await this.appData.findOneBy({_id:ObjectId(id)})
    }

    async list(): Promise<Post[]> {
        return await this.appData.find()
    }

    async update({id,title,content}:IPostDTO):Promise<void>{
        
        await this.appData.findOneAndUpdate({_id:new ObjectId(id)},
        {$set:{title,content}})
       
    }

    async deleteById(id :string):Promise<void>{
        await this.appData.findOneAndDelete({_id:new ObjectId(id)})
        
    }
}