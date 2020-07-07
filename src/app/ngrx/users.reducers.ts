import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter } from '@ngrx/entity';
import * as usersActions from './users.actions'
import { User, compareUsers } from './models';

export const adapter = createEntityAdapter<User>({
    sortComparer:compareUsers,
    selectId:user => user.age
})

export const initialUsersState = adapter.getInitialState()

export const usersReducers = createReducer(
    initialUsersState,
    on(usersActions.getAllUsersSuccess, (state, action) => adapter.addAll(action.users, state)),
    on(usersActions.addNewUserSuccess, (state, {user}) => adapter.addOne(user, state))
);

//selectAll is a method of EntitySelector Interface;
//getSelector is a method of EntityAdapter that returns an EntitySelector
export const selectAll = adapter.getSelectors().selectAll