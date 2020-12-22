import React from 'react';

import { FriendType } from '../../redux/friends-reducer';
import Pagination from '../Common/Pagination/Pagination';

import userPhoto from '../../assets/images/user-icon.png'
import styles from './Friend/Friend.module.css';

type FriendsPropsType = {
  friends: Array<FriendType>
  pageSize: number
  totalFriendsCount: number
  follow: (friendID: number) => void
  unfollow: (friendID: number) => void
  onPageChanged: (pageNumber: number) => void
}

const Friends = (props: FriendsPropsType) => {

  let pagesCount = Math.ceil(props.totalFriendsCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    {
      props.friends.map(p => <div key={p.id} className={styles.friendItem}>
        <img src={p.photos.small !== null ? p.photos.small : userPhoto} alt='friend' />
        <div className={styles.friendItemProfileInfo}>
          <div className={styles.friendItemName}>{p.name}</div>
          <div className={styles.friendItemLocation}>{'props.location'}</div>
          <div className={styles.friendItemStatus}>{'props.status'}</div>
        </div>
        <div className={styles.followBtn}>
          {
            p.followed
              ? <button onClick={() => { props.unfollow(p.id) }}>Unfollow</button>
              : <button onClick={() => props.follow(p.id)}>Follow</button>
          }
        </div>
      </div>)
    }
    <div>
      {/* {
            pages.map(p => {
              return <span
                className={this.props.currentPage === p ? styles.selectedPage : styles.page}
                onClick={(e) => { this.onPageChanged(p) }} >{p}</span>
            })
          } */}
      <Pagination totalCount={pagesCount} onPageChanged={props.onPageChanged} />
    </div>
  </div>
}

export default Friends