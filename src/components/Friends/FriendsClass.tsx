import React from 'react';

import { FriendsPropsType } from './Friends';

import userPhoto from '../../assets/images/user-icon.png'
import styles from './Friend/Friend.module.css';
import axios from 'axios';

import Pagination from './Pagination'


class Friends extends React.Component<FriendsPropsType> {


  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
        withCredentials: true,
        headers: {
          'api-key': '9aa516cb-8f4b-45f8-be8d-59445844c51c'
        }
      })
      .then(response => {
        this.props.setFriends(response.data.items)
        this.props.setTotalFriendsCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        withCredentials: true,
        headers: {
          'api-key': '9aa516cb-8f4b-45f8-be8d-59445844c51c'
        }
      })
      .then(response => {
        this.props.setFriends(response.data.items)
      })
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return (
      <div>
        {
          this.props.friends.map(p => <div key={p.id} className={styles.friendItem}>
            <img src={p.photos.small !== null ? p.photos.small : userPhoto} alt='friend' />
            <div className={styles.friendItemProfileInfo}>
              <div className={styles.friendItemName}>{p.name}</div>
              <div className={styles.friendItemLocation}>{'props.location'}</div>
              <div className={styles.friendItemStatus}>{'props.status'}</div>
            </div>
            <div className={styles.followBtn}>
              {
                p.followed
                  ? <button onClick={() => { this.props.unfollow(p.id) }}>Unfollow</button>
                  : <button onClick={() => this.props.follow(p.id)}>Follow</button>
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
          <Pagination totalCount={pagesCount} onPageChanged={this.onPageChanged} />
        </div>
      </div>
    )
  }
}

export default Friends;