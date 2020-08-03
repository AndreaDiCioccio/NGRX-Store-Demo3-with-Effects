import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { getAllUsers } from './ngrx/users.selectors';
import { addNewUser } from './ngrx/users.actions';
import * as usersActions from './ngrx/users.actions'
import { User, StoreState } from './ngrx/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
    users$:Observable<User[]>

    addNewUserForm = new FormGroup({
        name: new FormControl(''),
        age: new FormControl('')
    });

    constructor(private store:Store<StoreState>){}

    ngOnInit():void{

        this.store.dispatch(usersActions.getAllUsers())
        this.users$ = this.store.pipe( select(getAllUsers))

    }

    addNewUser():void{
        let newUser:User = {
            id:null,
            name:String(this.addNewUserForm.controls.name.value),
            age:Number(this.addNewUserForm.controls.age.value)
        }

        this.store.dispatch(addNewUser({user:newUser}))
    }

}
