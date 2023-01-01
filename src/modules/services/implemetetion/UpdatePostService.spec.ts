import { UpdatePostService } from "./UpdatePostService";
import { IPostDTO, IPostRepository } from "../../repository/IPostRespository";
jest.useFakeTimers()
const postRepositoryMock : jest.Mocked<IPostRepository> ={
    create:jest.fn(),
    deleteById:jest.fn(),
    findById:jest.fn(),
    findByTitle:jest.fn(),
    list:jest.fn(),
    update:jest.fn()
}

describe('testing update post service',()=>{
   it('should be able to update post service',async()=>{
    const updatePostService = new UpdatePostService(postRepositoryMock)
    postRepositoryMock.update.mockResolvedValue()

    const post:IPostDTO ={
         id:'1',
         content:'lindo dia....',
         metaDescription:'pretendo descrever como o dia está bonito',
         metaKey:'dia bonito',
         title:'hoje é um lindo dia'
    }
    await updatePostService.execute(post)

    expect(()=>updatePostService.execute(post)).resolves
    expect(postRepositoryMock.update).toBeCalledTimes(1)
   })
})