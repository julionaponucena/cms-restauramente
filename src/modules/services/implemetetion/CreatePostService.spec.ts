import { CreatePostService } from "./CreatePostService";
import { IPostRepository } from "../../repository/IPostRespository";
jest.useFakeTimers()
const postRepositoryMock : jest.Mocked<IPostRepository> ={
    create:jest.fn(),
    deleteById:jest.fn(),
    findById:jest.fn(),
    findByTitle:jest.fn(),
    list:jest.fn(),
    update:jest.fn()
}

describe('test create post repository',()=>{
    it('sould be able to create post if is not already exist',async ()=>{
        const createPostService = new CreatePostService(postRepositoryMock)

        postRepositoryMock.findByTitle.mockResolvedValue(null)
        postRepositoryMock.create.mockResolvedValue()

        await createPostService.execute({
            title:'meu post muito legal',
            content:'hoje está um lindo dia......',
            metaDescription:'pretendo descrever como o dia está lindo',
            metaKey:'post legal'
        })

        expect(()=>{createPostService.execute({
            title:'meu post muito legal',
            content:'hoje está um lindo dia......',
            metaDescription:'pretendo descrever como o dia está lindo',
            metaKey:'post legal'
        })}).resolves
        expect(postRepositoryMock.create).toBeCalledTimes(1)
        expect(postRepositoryMock.findByTitle).toBeCalledTimes(1)
    })

    it("sould not be able to create post if  already exist",async()=>{
        const createPostService = new CreatePostService(postRepositoryMock)
        postRepositoryMock.findByTitle.mockResolvedValue({
            title:'meu post muito legal',
            content:'hoje está um lindo dia......',
            id:'1',metaDescription:'pretendo descrever como o dia está lindo',
            metaKey:'post legal',
            isPublicated:true,
            
        })

        expect(()=>{createPostService.execute({
            title:'meu post muito legal',
            content:'hoje está um lindo dia......'
            ,metaDescription:'pretendo descrever como o dia está lindo',
            metaKey:'post legal',
        })}).rejects

    
    })
})