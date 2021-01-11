import { v1 } from 'uuid'
import { usersAPI } from '../api/api'
import { ActionsType } from './redux-store'

export type PostType = {
  id: string
  message: string
  time: string
  liked: boolean
  likesCount: number
}

export type ContactType = {
  facebook: string | null
  website: string | null
  vk: string | null
  instagram: string | null
  youtube: string | null
  github: string | null
  mainLink: string | null
}

export type PhotoType = {
  small: string
  large: string
}

export type ProfileType = {
  aboutMe: string
  contacts: ContactType
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: PhotoType
}

// export type ProfileType = {
//   avatar: string,
//   name: string,
//   location: string,
//   status: string,
//   about: string
// }

export type ProfilePagePropsType = {
  profile: ProfileType | null
  newPostText: string
  posts: Array<PostType>
}

export type AddPostActionType = {
  type: 'ADD-POST'
}

export type UpdatePostActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}

export type LikePostActionType = {
  type: 'LIKE-POST'
  postID: string
}

export type UnlikePostActionType = {
  type: 'UNLIKE-POST'
  postID: string
}

export type SetUserProfileActionType = {
  type: 'SET-USER-PROFILE'
  profile: ProfileType
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const LIKE = 'LIKE-POST'
const UNLIKE = 'UNLIKE-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export let initialState = {
  profile: {
    aboutMe: 'Kachaju svaju krainu',
    contacts: {
      facebook: null,
      website: null,
      vk: 'vk.com/robiert-stark',
      instagram: 'instagram.com/robiert-stark',
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'Open to work frontend developer',
    fullName: 'Robiert Stark',
    userId: 700000,
    photos: {
      small: '',
      large: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg'
    }
  },
  //   status: 'Staradaŭniaj Litoŭskaj Pahoni nia raźbić, nie spynić, nia strymać',

  newPostText: '',
  posts: [
    { id: v1(), message: 'Siabry, planuju sustreču z vami. Napišycie mnie)', time: '22:00', liked: true, likesCount: 12 },
    { id: v1(), message: "Siabry, zaprašaju ŭsich na kancert siaredniaviečnaj muzyki", time: '23:00', liked: false, likesCount: 11 }
  ]
}

const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionsType): ProfilePagePropsType => {
  let copyState = { ...state }
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: v1(),
        message: state.newPostText.trim(),
        time: `${new Date().getHours()}:${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`,
        liked: false,
        likesCount: 0
      }
      if (newPost.message !== '') {
        copyState = { ...state, posts: [...state.posts, newPost], newPostText: '' }
      }
      return copyState
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText }
    }
    case LIKE:
      return {
        ...state,
        posts: state.posts.map(p => {
          if (p.id === action.postID) {
            return { ...p, liked: true, likesCount: p.likesCount + 1 }
          }
          return p
        })
      }
    case UNLIKE:
      return {
        ...state,
        posts: state.posts.map(p => {
          if (p.id === action.postID) {
            return { ...p, liked: false, likesCount: p.likesCount - 1 }
          }
          return p
        })
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state
  }
}

export const AddPostActionCreator = (): AddPostActionType => {
  return {
    type: ADD_POST
  }
}

export const UpdatePostActionCreator = (newText: string): UpdatePostActionType => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
  }
}

export const likeAC = (postID: string): LikePostActionType => {
  return {
    type: LIKE,
    postID: postID
  }
}

export const unlikeAC = (postID: string): UnlikePostActionType => {
  return {
    type: UNLIKE,
    postID: postID
  }
}

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export const getUserProfileThunkCreator = (userId: number) => {
  return (dispatch: (action: ActionsType) => void) => {
    usersAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}

export default profileReducer