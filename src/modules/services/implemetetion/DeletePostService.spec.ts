import { DeletePostService } from "./DeletePostService";
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

describe('testing delete posting service',()=>{
    it('should be able to delete post service by id',async ()=>{
        const deletePostService = new DeletePostService(postRepositoryMock)
        postRepositoryMock.deleteById.mockResolvedValue()

        await deletePostService.execute('1')

        expect(()=>deletePostService.execute('1')).resolves
        expect(postRepositoryMock.deleteById).toBeCalledTimes(1)
    })
})