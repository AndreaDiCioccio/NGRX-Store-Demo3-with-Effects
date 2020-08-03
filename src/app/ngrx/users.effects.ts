import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects'
import { map, mergeMap, catchError, tap } from 'rxjs/operators'
import { MockService } from '../mock.service'
import * as usersAction from './users.actions'
import { getAllUsersSuccess, addNewUserSuccess, addNewUserError } from './users.actions';
import { User } from './models';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor( private actions$: Actions, private httpService: MockService ) {}
 
    //createEffect() return an Action type Observable
    addNewUser$ = createEffect(() => 
        this.actions$.pipe(
            ofType(usersAction.addNewUser),
            mergeMap((action) => this.httpService.addNewUser(action.user)),
            map((user:User) => addNewUserSuccess({user})),
            catchError( (error) => of(addNewUserError({error})))
        )
    )

    getAllUsers$ = createEffect(() => 
        this.actions$.pipe(
            ofType(usersAction.getAllUsers.type),
            mergeMap( () => this.httpService.getAllUsers()),
            map( (users:User[]) => getAllUsersSuccess({users}))
        )
    )

}