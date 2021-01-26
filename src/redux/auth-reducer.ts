import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { authAPI } from "../api/api"
import { ActionsType, AppStateType } from "./redux-store"

export type UserDataType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

export type AuthPropsType = {
  id: number | null
  login: string | null
  email: string | null
  isAuth: boolean
}

export type SetUserDataActionType = {
  type: 'SET-USER-DATA'
  payload: UserDataType
}

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

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
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetUserDataActionType => {
  return {
    type: SET_USER_DATA,
    payload: { id, login, email, isAuth}
  }
}

export const getAuthUserDataThunkCreator = () => {
  return (dispatch: (action: ActionsType) => void) => {
    authAPI.getAuth()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data
          dispatch(setAuthUserData(id, login, email, true))
        }
      })
  }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean): ThunkType => {
  return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    authAPI.login(email, password, rememberMe)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserDataThunkCreator())
        }
      })
  }
}

export const logoutThunkCreator = (): ThunkType => {
  return (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    authAPI.logout()
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData(null, null, null, false))
        }
      })
  }
}

export default authReducer