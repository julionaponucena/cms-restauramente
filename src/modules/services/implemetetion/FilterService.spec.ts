import { FilterService } from "./FilterService"

describe('testing filter service',()=>{
    it('shiold be able to filter blank object atributes',()=>{
        type people ={
            name:string,
            age?:number
        }
        const object:people ={
            name:'julio',
            age:undefined,

        }
        
        const filterService = new FilterService()

        const result =filterService.execute<people>(object)

        expect(result).toEqual({name:'julio'})
    })
})