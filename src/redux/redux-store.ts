import { combineReducers, createStore } from "redux";
import profileReducer, { AddPostActionType, LikePostActionType, UnlikePostActionType, UpdatePostActionType } from './profile-reducer'
import dialogsReducer, { SendMessageActionType, UpdateMessageActionType } from './dialogs-reducer'
import friendsReducer, { FollowActionType, SetFriendsActionType, SetCurrentPageActionType, UnfollowActionType, SetTotalFriendsActionType } from './friends-reducer'

type ReducersType = typeof reducers

export type AppStateType = ReturnType<ReducersType>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer
})

let store  = createStore(reducers)

export type ActionsType = 
AddPostActionType 
| UpdatePostActionType
| SendMessageActionType 
| UpdateMessageActionType
| FollowActionType
| UnfollowActionType
| SetFriendsActionType
| SetCurrentPageActionType
| SetTotalFriendsActionType 
| LikePostActionType 
| UnlikePostActionType


export default store