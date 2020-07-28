import { Injectable } from "@angular/core"
import { users } from 'src/app/mockdata';
import { User } from './ngrx/models';
import { from, of, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MockService {

    addNewUser(user:User):Observable<User>{

        users.push({name:user.name, age:user.age })
        return from([user])

    }

    getAllUsers():Observable<User[]>{
        return of(users)
    }

}
