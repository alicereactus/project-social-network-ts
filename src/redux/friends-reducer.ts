import { ActionsType } from "./redux-store"

export type FriendType = {
  id: string
  followed: boolean
  name: string
  location: string
  status: string
  avatar: string
}

export type FriendsPagePropsType = {
  friends: Array<FriendType>
}

export type FollowActionType = {
  type: 'FOLLOW'
  friendID: string
}

export type UnfollowActionType = {
  type: 'UNFOLLOW'
  friendID: string
}

export type SetActionType = {
  type: 'SET-FRIENDS'
  friends: Array<FriendType>
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET-FRIENDS'

let initialState = {
  friends: []
}

export const friendsReducer = (state: FriendsPagePropsType = initialState, action: ActionsType): FriendsPagePropsType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        friends: state.friends.map(f => {
          if (f.id === action.friendID) {
            return { ...f, followed: true }
          }
          return f
        })
      }
    case UNFOLLOW: 
    return {
      ...state,
      friends: state.friends.map(f => {
        if (f.id === action.friendID) {
          return { ...f, followed: false }
        }
        return f
      })
    }
    case SET_FRIENDS: {
      return { ...state, friends: [...state.friends, ...action.friends] }
    }
    default:
      return state
  }
}

export const followAC = (friendID: string): FollowActionType => {
  return {
    type: FOLLOW,
    friendID: friendID
  }
}

export const unfollowAC = (friendID: string): UnfollowActionType => {
  return {
    type: UNFOLLOW,
    friendID: friendID
  }
}

export const setFriendsAC = (friends: Array<FriendType>): SetActionType => {
  return {
    type: SET_FRIENDS,
    friends: friends
  }
}

export default friendsReducer