import { createSelector, createFeatureSelector } from '@ngrx/store'
import * as fromUsers from './users.reducers'
import { UsersState } from './models'

export const selectUsersState = createFeatureSelector<UsersState>('users')
 
export const getAllUsers = createSelector(
    selectUsersState,
    fromUsers.selectAll
)