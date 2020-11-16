import {v1} from 'uuid'

let rerenderEntireTree = () => {}

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
  state: RootStateType
  addPost: () => void
  updateNewPostText: (newText: string) => void
  sendMessage: () => void
  updateNewMessageText: (newText: string) => void
  subscribe: (observer: () => void) => void
}

const store = {
  state: {
    profilePage: {
      newPostText: '',
      posts: [
        { id: v1(), message: 'Hi, how are you?', likesCount: 12 },
        { id: v1(), message: "It's my first post", likesCount: 11 },
        { id: v1(), message: "It's my post", likesCount: 11 },
        { id: v1(), message: "Post", likesCount: 11 },
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
        { id: v1(), name: 'Aliesia', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
        { id: v1(), name: 'Wujtek', avatar: 'https://avatarko.ru/img/kartinka/33/serial_Game_of_Thrones_32744.jpg' },
        { id: v1(), name: 'Lech', avatar: 'https://avatarko.ru/img/kartinka/6/serial_Game_of_Thrones_5983.jpg' },
        { id: v1(), name: 'Karol', avatar: 'https://pm1.narvii.com/7377/ec4eea9404ef6004a52cadac44ed1dc33c28e16br1-600-800v2_uhq.jpg' }
      ]
    },
    friendsPage: {
      friends: [
        { id: v1(), name: 'Hanna', location: 'Minsk, Belarus', status: 'Каб любіць Беларусь нашу мілую маму...', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
        { id: v1(), name: 'Paŭlinka', location: 'Harodnia, Belarus', status: 'Valasy doŭhija, a rozum karotki', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
        { id: v1(), name: 'Aliesia', location: 'Poznań, Poĺšča', status: 'Zima nadchodzi', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
      ],
    }
  },
  
  addPost: function () {
    const newPost: PostType = {
      id: v1(),
      message: store.state.profilePage.newPostText.trim(),
      likesCount: 0
    }
    if (newPost.message !== '') {
      store.state.profilePage.posts.push(newPost)
      store.state.profilePage.newPostText = ''
      rerenderEntireTree();
    }
  },
  
  updateNewPostText: function (newText: string) {
    store.state.profilePage.newPostText = newText;
    rerenderEntireTree();
  },
  
  sendMessage: function() {
    const newMessage: MessageType = {
      id: v1(),
      message: store.state.dialogsPage.newMessageText.trim(),
    }
    if (newMessage.message !== '') {
      store.state.dialogsPage.messages.push(newMessage)
      store.state.dialogsPage.newMessageText = ''
      rerenderEntireTree();
    }
  },
  
  updateNewMessageText: function (newText: string) {
    store.state.dialogsPage.newMessageText = newText;
    rerenderEntireTree();
  },
  
  subscribe: function (observer: () => void) {
    rerenderEntireTree = observer // паттерн observer наблюдатель // piblisher-subscriber// addEventListener// обработчик события onChange
  }
}

export default store;

// store - OOP