import React from 'react';

import styles from './Friend.module.css';

type FriendPropsType = {
  id: string
  followed: boolean
  name: string
  location: string
  status: string
  avatar: string
  follow: (friendID: string) => void
  unfollow: (friendID: string) => void
}

const Friend = (props: FriendPropsType) => {

  return (
    <div className={styles.friendItem}>
      <img src={props.avatar} alt='friend' />
      <div className={styles.friendItemProfileInfo}>
        <div className={styles.friendItemName}>{props.name}</div>
        <div className={styles.friendItemLocation}>{props.location}</div>
        <div className={styles.friendItemStatus}>{props.status}</div>
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