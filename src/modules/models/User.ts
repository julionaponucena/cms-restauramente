import {Entity,Column,ObjectIdColumn} from 'typeorm'

@Entity("User")
export class User{

    @ObjectIdColumn()
    _id:string
    @Column()
     email:string

    @Column()
     password:string

    constructor(email:string,password:string,id:string){
        this.email = email
        this.password= password
        this._id=id
    }

    
}