import axios from "axios";
import React from 'react';
import { v1 } from 'uuid';

import { FriendType } from '../../redux/friends-reducer'

import Friend from './Friend/Friend';

export type FriendsPropsType = {
  friends: Array<FriendType>
  pageSize: number
  totalFriendsCount: number
  currentPage: number
  follow: (friendID: number) => void
  unfollow: (friendID: number) => void
  setFriends: (friends: Array<FriendType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalFriendsCount: (totalFriendsCount: number) => void
}

const Friends = (props: FriendsPropsType) => {

  let getUsers = () => {
    if (props.friends.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setFriends(response.data.items)
        })
    }
  }

  // [
  //   { id: v1(), followed: false, name: 'Hanna', location: 'Minsk, Belarus', status: 'Каб любіць Беларусь нашу мілую маму...', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
  //   { id: v1(), followed: true, name: 'Paŭlinka', location: 'Harodnia, Belarus', status: 'Valasy doŭhija, a rozum karotki', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
  //   { id: v1(), followed: false, name: 'Diejnieris', location: 'Poznań, Poĺšča', status: 'Zima nadchodzi', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
  // ]

  const friendsElements = props.friends.map(p => <Friend
    key={p.id}
    id={p.id}
    followed={p.followed}
    name={p.name}
    uniqueUrlName={p.uniqueUrlName}
    photos={p.photos}
    status={p.status}
    follow={props.follow}
    unfollow={props.unfollow} />)

  return (
    <div>
      <button onClick={getUsers}>Get users</button>
      <div>{friendsElements}</div>
    </div>
  )
}

export default Friends;