import React from 'react';

import { UserType } from '../../redux/users-reducer';
import Pagination from '../Common/Pagination/Pagination';

import userPhoto from '../../assets/images/user-icon.png'
import styles from './Users.module.css';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  onPageChanged: (pageNumber: number) => void
}

const Users = (props: UsersPropsType) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    {
      props.users.map(u => <div key={u.id} className={styles.userItem}>
        <div>
          <NavLink to={'/profile' + u.id}>
          <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt='friend' />
          </NavLink>
        </div>
        <div className={styles.userItemProfileInfo}>
          <div className={styles.userItemName}>{u.name}</div>
          <div className={styles.userItemLocation}>{'props.location'}</div>
          <div className={styles.userItemStatus}>{'props.status'}</div>
        </div>
        <div className={styles.followBtn}>
          {
            u.followed
              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
              : <button onClick={() => props.follow(u.id)}>Follow</button>
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

export default Users