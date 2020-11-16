import React from 'react';
import s from './Friend.module.css';
import {FriendType} from '../../../redux/state'

const Friend = (props: FriendType) => {

  return (
    <div className={s.friendItem}>
      <img src={props.avatar} />
      <div className={s.friendItemProfileInfo}>
        <div className={s.friendItemName}>{props.name}</div>
        <div className={s.friendItemLocation}>{props.location}</div>
        <div className={s.friendItemStatus}>{props.status}</div>
      </div>
    </div>
  )
}

export default Friend;