import { Injectable } from "@angular/core"
import { users } from './mockdata';
import { from, of, Observable } from 'rxjs';
import { User } from './interfaces';

@Injectable({providedIn: 'root'})
export class MockService {

    addNewUser(user:User):Observable<User>{

        //crea un nuovo id
        let newId:number = Math.max.apply(Math, users.map( obj => obj.id))
        newId++

        let newUser:User = {id:newId, name:user.name, age:user.age }
        users.push(newUser)
        
        return from([newUser])

    }

    getAllUsers():Observable<User[]>{
        return of(users)
    }

}
