import { ActionsType } from "./redux-store"

export type UserDataType = {
  id: number | null
  login: string | null
  email: string | null
}

export type AuthPropsType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

export type SetUserDataActionType = {
  type: 'SET-USER-DATA'
  data: UserDataType
}

const SET_USER_DATA = 'SET-USER-DATA'

let initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

export const authReducer = (state: AuthPropsType = initialState, action: ActionsType): AuthPropsType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return { ...state, ...action.data, isAuth: true }
    }
    default:
      return state
  }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null): SetUserDataActionType => {
  return {
    type: SET_USER_DATA,
    data: { id, login, email }
  }
}

export default authReducer