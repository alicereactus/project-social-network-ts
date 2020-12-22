import { connect } from 'react-redux';

import { followAC, FriendType, setCurrentPageAC, setFriendsAC, setTotalFriendsCountAC, unfollowAC } from '../../redux/friends-reducer';
import { AppStateType, ActionsType } from '../../redux/redux-store';

import Friends from './FriendsClass';

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

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;