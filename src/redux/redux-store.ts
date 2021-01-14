import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'

import profileReducer, {
    AddPostActionType, LikePostActionType, SetStatusActionType, SetUserProfileActionType,
    UnlikePostActionType, UpdatePostActionType
} from './profile-reducer'
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType } from './dialogs-reducer'
import usersReducer, {
    FollowActionType, SetUsersActionType, SetCurrentPageActionType,
    UnfollowActionType, SetTotalUsersActionType, ToggleIsFetchingActionType,
    ToggleIsFollowingProgressActionType,
} from './users-reducer'
import authReducer, { SetUserDataActionType } from "./auth-reducer";

type ReducersType = typeof reducers

export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store  = createStore(reducers, applyMiddleware(thunkMiddleware))

export type ActionsType = 
AddPostActionType 
| UpdatePostActionType
| SendMessageActionType 
| UpdateMessageActionType
| LikePostActionType 
| UnlikePostActionType
| SetUserProfileActionType
| SetStatusActionType
| FollowActionType
| UnfollowActionType
| SetUsersActionType
| SetCurrentPageActionType
| SetTotalUsersActionType 
| ToggleIsFetchingActionType
| SetUserDataActionType
| ToggleIsFollowingProgressActionType

// @ts-ignore
window.store = store

export default store