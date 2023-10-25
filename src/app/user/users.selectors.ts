
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';

export interface State {
    users: fromUser.State
}

export const reducers: ActionReducerMap<State> = {
    users: fromUser.userReducer
}

export const selectUserState = createFeatureSelector<fromUser.State>('users');

export const selectUserIds = createSelector(
    selectUserState,
    fromUser.selectUserIds
)

export const selectUserEntities = createSelector(
    selectUserState,
    fromUser.selectUserEntities
)

export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.selectAllUsers
)

export const selectUserTotal = createSelector(
    selectUserState,
    fromUser.selectUserTotal
)

export const selectCurrenctUserId = createSelector(
    selectUserState,
    fromUser.getSelectedUserId
)

export const selectCurrentUser = createSelector(
    selectUserEntities,
    selectCurrenctUserId,
    (userEntites, userId) => userId && userEntites[userId]
)