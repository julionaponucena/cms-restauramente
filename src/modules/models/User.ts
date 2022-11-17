import {Entity,Column,ObjectID,ObjectIdColumn} from 'typeorm'

@Entity("User")
export class User{

    @ObjectIdColumn()
    id:ObjectID
    @Column()
     email:string

    @Column()
     password:string

    constructor(email:string,password:string,id:ObjectID){
        this.email = email
        this.password= password
        this.id=id
    }

    
}