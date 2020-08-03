import { Injectable } from "@angular/core"
import { users } from 'src/app/mockdata';
import { User } from './ngrx/models';
import { from, of, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MockService {

    addNewUser(user:User):Observable<User>{

        let newId:number = Math.max.apply(Math, users.map(function(o) { return o.id; }))
        newId++
        users.push({id:newId, name:user.name, age:user.age })
        return from([user])

    }

    getAllUsers():Observable<User[]>{
        return of(users)
    }

}
