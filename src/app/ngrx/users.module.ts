import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects'
import * as fromUsers from './users.reducers'
import { UsersEffects } from './users.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('users', fromUsers.usersReducers),
    EffectsModule.forFeature([UsersEffects])
  ],
})

export class UsersModule {}