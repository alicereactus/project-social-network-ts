import React from 'react';

import { FriendsPropsType } from './Friends';

import userPhoto from '../../assets/images/user-icon.png'
import styles from './Friend/Friend.module.css';
import axios from 'axios';


class Friends extends React.Component<FriendsPropsType> {

  componentDidMount() {
    axios
    .get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      this.props.setFriends(response.data.items)
    })
  }

  render() {
    return (
      <div>
        {
          this.props.friends.map(p => <div className={styles.friendItem}>
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
      </div>
    )
  }
}

export default Friends;