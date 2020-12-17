import React from 'react';

import styles from './Friend.module.css';
import userPhoto from '../../../assets/images/user-icon.png'

export type FriendPropsType = {
  // id: string
  // followed: boolean
  // name: string
  // location: string
  // status: string
  // avatar: string
  name: string
  id: number
  uniqueUrlName: string | null
  photos: {
    small: string | null
    large: string | null
  }
  status: string | null
  followed: boolean
  follow: (friendID: number) => void
  unfollow: (friendID: number) => void
}

const Friend = (props: FriendPropsType) => {

  return (
    <div className={styles.friendItem}>
      <img src={props.photos.small !== null ? props.photos.small : userPhoto} alt='friend' />
      <div className={styles.friendItemProfileInfo}>
        <div className={styles.friendItemName}>{props.name}</div>
        <div className={styles.friendItemLocation}>{'props.location'}</div>
        <div className={styles.friendItemStatus}>{'props.status'}</div>
      </div>
      <div className={styles.followBtn}>
        {
          props.followed
            ? <button onClick={() => { props.unfollow(props.id) }}>Unfollow</button>
            : <button onClick={() => props.follow(props.id)}>Follow</button>
        }
      </div>
    </div>
  )
}

export default Friend;