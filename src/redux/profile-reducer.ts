import { v1 } from 'uuid'
import { ActionsType } from './redux-store'

export type PostType = {
  id: string
  message: string
  time: string
  liked: boolean
  likesCount: number
}

export type ProfilePropsType = {
  avatar: string,
  name: string,
  location: string,
  status: string,
  about: string
}

export type ProfilePagePropsType = {
  profile: ProfilePropsType
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

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const LIKE = 'LIKE-POST'
const UNLIKE = 'UNLIKE-POST'

export let initialState = {
  profile: {
    avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg',
    name: 'Robiert Stark',
    location: 'Minsk, Belarus',
    status: 'Staradaŭniaj Litoŭskaj Pahoni nia raźbić, nie spynić, nia strymać',
    about: 'Kachaju svaju krainu'
  },
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

export default profileReducer