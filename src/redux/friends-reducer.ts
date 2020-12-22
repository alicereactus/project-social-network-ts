import { ActionsType } from "./redux-store"

export type FriendType = {
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
}

export type FriendsPagePropsType = {
  friends: Array<FriendType>
  pageSize: number
  totalFriendsCount: number
  currentPage: number
  isFetching: boolean
}

export type FollowActionType = {
  type: 'FOLLOW'
  friendID: number
}

export type UnfollowActionType = {
  type: 'UNFOLLOW'
  friendID: number
}

export type SetFriendsActionType = {
  type: 'SET-FRIENDS'
  friends: Array<FriendType>
}

export type SetCurrentPageActionType = {
  type: 'SET-CURRENT-PAGE'
  currentPage: number
}

export type SetTotalFriendsActionType = {
  type: 'SET-TOTAL-FRIENDS-COUNT'
  totalFriendsCount: number
}

export type ToggleIsFetchingActionType = {
  type: 'TOGGLE-IS-FETCHING'
  isFetching: boolean
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_FRIENDS = 'SET-FRIENDS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_FRIENDS_COUNT = 'SET-TOTAL-FRIENDS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
  friends: [],
  pageSize: 5,
  totalFriendsCount: 0,
  currentPage: 1,
  isFetching: true
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
      return { ...state, friends: action.friends }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_FRIENDS_COUNT: {
      return { ...state, totalFriendsCount: action.totalFriendsCount }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state
  }
}

export const followAC = (friendID: number): FollowActionType => {
  return {
    type: FOLLOW,
    friendID
  }
}

export const unfollowAC = (friendID: number): UnfollowActionType => {
  return {
    type: UNFOLLOW,
    friendID
  }
}

export const setFriendsAC = (friends: Array<FriendType>): SetFriendsActionType => {
  return {
    type: SET_FRIENDS,
    friends
  }
}

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalFriendsCountAC = (totalFriendsCount: number): SetTotalFriendsActionType => {
  return {
    type: SET_TOTAL_FRIENDS_COUNT,
    totalFriendsCount
  }
}

export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching
  }
}

export default friendsReducer