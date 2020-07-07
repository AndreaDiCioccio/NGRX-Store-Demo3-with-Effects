import { Injectable } from "@angular/core"
import { users } from 'src/environments/environment';
import { User } from './ngrx/models';
import { from, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class HttpService {

    constructor(){}

    addNewUser(user:User){

        users.push({name:user.name, age:user.age })
        return from([user])

    }

    getAllUsers(){
        return of(users)
    }

}