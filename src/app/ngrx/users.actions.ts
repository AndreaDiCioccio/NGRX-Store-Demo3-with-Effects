import { createAction, props } from '@ngrx/store';
import { User } from '../interfaces';

export const getAllUsers = createAction(
    '[Home Page] Get All Users'
)

export const getAllUsersSuccess = createAction(
    '[Users Effects] Get All Users Success',
    props<{users:User[]}>()
)

export const addNewUser = createAction(
    '[Home Page] Add New User',
    props< {user:User} >()
)

export const addNewUserSuccess = createAction(
    '[Users Effects] Add New User Success',
    props< {user:User} >()
)

export const addNewUserError = createAction(
    '[Users Effects] Add New User Error',
    props< {error:any} >()
)