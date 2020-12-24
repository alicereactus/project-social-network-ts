import { combineReducers, createStore } from "redux";

import profileReducer, { AddPostActionType, LikePostActionType, SetUserProfileActionType, UnlikePostActionType, UpdatePostActionType } from './profile-reducer'
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType } from './dialogs-reducer'
import  usersReducer, { FollowActionType, SetUsersActionType, SetCurrentPageActionType, UnfollowActionType, SetTotalUsersActionType, ToggleIsFetchingActionType, } from './users-reducer'

type ReducersType = typeof reducers

export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store  = createStore(reducers)

export type ActionsType = 
AddPostActionType 
| UpdatePostActionType
| SendMessageActionType 
| UpdateMessageActionType
| LikePostActionType 
| UnlikePostActionType
| SetUserProfileActionType
| FollowActionType
| UnfollowActionType
| SetUsersActionType
| SetCurrentPageActionType
| SetTotalUsersActionType 
| ToggleIsFetchingActionType

// @ts-ignore
window.store = store

export default store