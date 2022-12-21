interface constructorParams{
    id:string,
    email:string,
    password:string
}

export interface IListUserDto{
    id:string,
    email:string,
    password:string
}


export class ListUserDto{
   private id:string
   private email:string
   private password:string

   constructor({id,email,password}:constructorParams){
        this.id = id
        this.email = email
        this.password = password
   }
}