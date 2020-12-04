import { v1 } from 'uuid'
import { ActionsType } from "./redux-store"

export type MessageType = {
  id: string
  message: string
  time: string
}

export type DialogType = {
  id: string
  name: string
  avatar: string
}

export type DialogsPagePropsType = {
  newMessageText: string
  messages: Array<MessageType>
  dialogs: Array<DialogType>
}

export type SendMessageActionType = {
  type: 'SEND-MESSAGE'
}

export type UpdateMessageActionType = {
  type: 'UPDATE-NEW-MESSAGE-TEXT'
  newText: string
}

const SEND_MESSAGE = 'SEND-MESSAGE'

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
  newMessageText: '',
  messages: [
    { id: v1(), message: 'Pryvitannie!', time: '22:00' },
    { id: v1(), message: 'Jak tvaje spravy?', time: '10:00' },
    { id: v1(), message: 'Au, adkažy)', time: '11:00' },
    { id: v1(), message: 'Usio vydatna) Jak ty?', time: '12:00' },
    { id: v1(), message: 'Taksama ŭsio dobra)', time: '13:00' }
  ],
  dialogs: [
    { id: v1(), name: 'Hanna', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
    { id: v1(), name: 'Paŭlinka', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
    { id: v1(), name: 'Diejnieris', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
    { id: v1(), name: 'Wujtek', avatar: 'https://avatarko.ru/img/kartinka/33/serial_Game_of_Thrones_32744.jpg' },
    { id: v1(), name: 'Lech', avatar: 'https://avatarko.ru/img/kartinka/6/serial_Game_of_Thrones_5983.jpg' },
    { id: v1(), name: 'Karol', avatar: 'https://pm1.narvii.com/7377/ec4eea9404ef6004a52cadac44ed1dc33c28e16br1-600-800v2_uhq.jpg' }
  ]
}

export const dialogsReducer = (state: DialogsPagePropsType = initialState, action: ActionsType): DialogsPagePropsType => {
  let copyState = { ...state };
  switch (action.type) {
    case SEND_MESSAGE: {
      const newMessage: MessageType = {
        id: v1(),
        message: state.newMessageText.trim(),
        time: `${new Date().getHours()}:${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`
      }
      if (newMessage.message !== '') {
        copyState = { ...state, messages: [...state.messages, newMessage], newMessageText: '' }
      }
      return copyState
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText }
    }
    default:
      return state
  }
}

export const SendMessageActionCreator = (): SendMessageActionType => {
  return {
    type: SEND_MESSAGE
  }
}

export const UpdateMessageActionCreator = (newText: string): UpdateMessageActionType => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
  }
}

export default dialogsReducer