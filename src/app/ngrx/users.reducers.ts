import { createReducer, on, State, Action } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import * as usersActions from './users.actions'
import { compareUsers, UsersState } from './models';
import { User } from '../interfaces';

export const adapter = createEntityAdapter<User>({
    sortComparer:compareUsers
})

export const initialUsersState = adapter.getInitialState()

export const usersReducers = createReducer(
    initialUsersState,
    on(usersActions.getAllUsersSuccess, (state, action) => adapter.addAll(action.users, state)),
    on(usersActions.addNewUserSuccess, (state, action) => adapter.addOne(action.user, state))
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll

export function reducer(state: UsersState | undefined, action: Action) {
    return usersReducers(state, action)
}