import { ListPostService } from "./ListPostService";
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

describe('testing delete post',()=>{
    it('should be able to list posts',async()=>{
        const listPostService = new ListPostService(postRepositoryMock)
        postRepositoryMock.list.mockResolvedValue([
            {
                id:'1',
                title:'hoje é um lindo dia',
                content:'que dia lindo......',
                isPublicated:false,
                metaDescription:'pretendo descrever como hoje é um dia bonito',
                metaKey:'dia lindo'
            }
        ])

        const posts = await listPostService.execute()

        expect(()=>listPostService.execute()).resolves
        expect(postRepositoryMock.list).toBeCalledTimes(1)
        expect(posts.length).toBe(1)
        expect(posts[0]).toHaveProperty('id')
        expect(posts[0]).toHaveProperty('content')
        expect(posts[0]).toHaveProperty('isPublicated')
        expect(posts[0]).toHaveProperty('metaDescription')
        expect(posts[0]).toHaveProperty('metaKey')
        expect(posts[0].id).toBe('1')
        expect(posts[0].title).toBe('hoje é um lindo dia')
        expect(posts[0].content).toBe('que dia lindo......')
        expect(posts[0].isPublicated).toBe(false)
        expect(posts[0].metaDescription).toBe('pretendo descrever como hoje é um dia bonito')
        expect(posts[0].metaKey).toBe('dia lindo')
    })
})