import { v1 } from 'uuid'

export type ProfilePropsType = {
  avatar: string,
  name: string,
  location: string,
  status: string,
  about: string
}

export type PostType = {
  id: string
  message: string
  likesCount: number
}

export type MessageType = {
  id: string
  message: string
}

export type DialogType = {
  id: string
  name: string
  avatar: string
}

export type FriendType = {
  id: string
  name: string
  location: string
  status: string
  avatar: string
}

export type ProfilePagePropsType = {
  profile: ProfilePropsType
  newPostText: string
  posts: Array<PostType>
}

export type DialogsPagePropsType = {
  newMessageText: string
  messages: Array<MessageType>
  dialogs: Array<DialogType>
}

export type FriendsPagePropsType = {
  friends: Array<FriendType>
}

export type RootStateType = {
  profilePage: ProfilePagePropsType
  dialogsPage: DialogsPagePropsType
  friendsPage: FriendsPagePropsType
}

export type StorePropsType = {
  _state: RootStateType
  _callSubscriber: () => void
  getState: () => RootStateType
  subscribe: (observer: () => void) => void
  dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof AddPostActionCreator> | ReturnType<typeof UpdatePostActionCreator> | ReturnType<typeof SendMessageActionCreator> | ReturnType<typeof UpdateMessageActionCreator>

export const AddPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  } as const
}

export const UpdatePostActionCreator = (newText: string) => {
  return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
  } as const
}

export const SendMessageActionCreator = () => {
  return {
    type: 'SEND-MESSAGE'
  } as const
}

export const UpdateMessageActionCreator = (newText: string) => {
  return {
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
  } as const
}

const store: StorePropsType = {
  _state: {
    profilePage: {
      profile: {
        avatar: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg',
        name: 'Robiert Stark',
        location: 'Minsk, Belarus',
        status: 'Staradaŭniaj Litoŭskaj Pahoni nia raźbić, nie spynić, nia strymać',
        about: 'Kachaju svaju krainu'
      }, 
      newPostText: '',
      posts: [
        { id: v1(), message: 'Siabry, planuju sustreču z vami. Napišycie mnie)', likesCount: 12 },
        { id: v1(), message: "Siabry, zaprašaju ŭsich na kancert siaredniaviečnaj muzyki", likesCount: 11 }
      ]
    },
    dialogsPage: {
      newMessageText: '',
      messages: [
        { id: v1(), message: 'Pryvitannie!' },
        { id: v1(), message: 'Jak tvaje spravy?' },
        { id: v1(), message: 'Au, adkažy)' },
        { id: v1(), message: 'Usio vydatna) Jak ty?' },
        { id: v1(), message: 'Taksama ŭsio dobra)' }
      ],
      dialogs: [
        { id: v1(), name: 'Hanna', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
        { id: v1(), name: 'Paŭlinka', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
        { id: v1(), name: 'Diejnieris', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
        { id: v1(), name: 'Wujtek', avatar: 'https://avatarko.ru/img/kartinka/33/serial_Game_of_Thrones_32744.jpg' },
        { id: v1(), name: 'Lech', avatar: 'https://avatarko.ru/img/kartinka/6/serial_Game_of_Thrones_5983.jpg' },
        { id: v1(), name: 'Karol', avatar: 'https://pm1.narvii.com/7377/ec4eea9404ef6004a52cadac44ed1dc33c28e16br1-600-800v2_uhq.jpg' }
      ]
    },
    friendsPage: {
      friends: [
        { id: v1(), name: 'Hanna', location: 'Minsk, Belarus', status: 'Каб любіць Беларусь нашу мілую маму...', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
        { id: v1(), name: 'Paŭlinka', location: 'Harodnia, Belarus', status: 'Valasy doŭhija, a rozum karotki', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
        { id: v1(), name: 'Diejnieris', location: 'Poznań, Poĺšča', status: 'Zima nadchodzi', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
      ],
    }
  },

  _callSubscriber() {
    console.log('State changed')
  },

  getState() {
    return this._state
  },

  subscribe(observer: () => void) {
    this._callSubscriber = observer // паттерн observer наблюдатель // piblisher-subscriber// addEventListener// обработчик события onChange
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost: PostType = {
        id: v1(),
        message: this._state.profilePage.newPostText.trim(),
        likesCount: 0
      }
      if (newPost.message !== '') {
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber();
      }
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } else if (action.type === 'SEND-MESSAGE') {
      const newMessage: MessageType = {
        id: v1(),
        message: this._state.dialogsPage.newMessageText.trim(),
      }
      if (newMessage.message !== '') {
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber();
      }
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber();
    }
  }
}

export default store;

// store - OOP