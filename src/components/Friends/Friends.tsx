import React from 'react';
import { v1 } from 'uuid';

import { FriendType } from '../../redux/friends-reducer'

import Friend from './Friend/Friend';

type FriendsPropsType = {
  friends: Array<FriendType>
  follow: (friendID: string) => void
  unfollow: (friendID: string) => void
  setFriends: (friends: Array<FriendType>) => void
}

const Friends = (props: FriendsPropsType) => {

  if (props.friends.length === 0) {
    props.setFriends([
      { id: v1(), followed: false, name: 'Hanna', location: 'Minsk, Belarus', status: 'Каб любіць Беларусь нашу мілую маму...', avatar: 'https://i.pinimg.com/originals/a4/04/71/a40471885a948612dcf92936141d98da.jpg' },
      { id: v1(), followed: true, name: 'Paŭlinka', location: 'Harodnia, Belarus', status: 'Valasy doŭhija, a rozum karotki', avatar: 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1539913/d9e7e7eee9a421b16fee678e8bbd92b9/960x540' },
      { id: v1(), followed: false, name: 'Diejnieris', location: 'Poznań, Poĺšča', status: 'Zima nadchodzi', avatar: 'https://avatarko.ru/img/kartinka/13/serial_Game_of_Thrones_Daenerys_12809.jpg' },
    ])
  }

  const friendsElements = props.friends.map(p => <Friend
    key={p.id}
    id={p.id}
    followed={p.followed}
    avatar={p.avatar}
    name={p.name}
    location={p.location}
    status={p.status}
    follow={props.follow}
    unfollow={props.unfollow} />)

  return (
    <div>
      <div>{friendsElements}</div>
    </div>
  )
}

export default Friends;