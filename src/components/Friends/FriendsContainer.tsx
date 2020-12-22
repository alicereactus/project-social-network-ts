import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { followAC, FriendType, setCurrentPageAC, setFriendsAC, setTotalFriendsCountAC, unfollowAC } from '../../redux/friends-reducer';
import { AppStateType, ActionsType } from '../../redux/redux-store';

import Friends from './Friends';

type FriendsContainerPropsType = {
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

class FriendsContainer extends React.Component<FriendsContainerPropsType> {

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
    return <Friends 
    friends={this.props.friends} 
    pageSize={this.props.pageSize}
    totalFriendsCount={this.props.totalFriendsCount}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    onPageChanged={this.onPageChanged} />
  }
}


let mapStateToProps = (state: AppStateType) => {
  return {
    friends: state.friendsPage.friends,
    pageSize: state.friendsPage.pageSize,
    totalFriendsCount: state.friendsPage.totalFriendsCount,
    currentPage: state.friendsPage.currentPage
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    follow: (friendID: number) => {
      dispatch(followAC(friendID))
    },
    unfollow: (friendID: number) => {
      dispatch(unfollowAC(friendID))
    },
    setFriends: (friends: Array<FriendType>) => {
      dispatch(setFriendsAC(friends))
    },
    setCurrentPage: (currentPage: number) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setTotalFriendsCount: (totalFriendsCount: number) => {
      dispatch(setTotalFriendsCountAC(totalFriendsCount))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)