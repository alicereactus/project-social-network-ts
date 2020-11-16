import React from 'react';
import Friend from './Friend/Friend';
import { FriendsPagePropsType } from '../../redux/state'

type FriendsPropsType = {
  friendsPage: FriendsPagePropsType
}

const Friends = (props: FriendsPropsType) => {

  const friendsElements = props.friendsPage.friends.map(p => <Friend
    id={p.id}
    avatar={p.avatar}
    name={p.name}
    location={p.location}
    status={p.status} />)

  return (
    <div>
      <div>{friendsElements}</div>
    </div>
  )
}

export default Friends;