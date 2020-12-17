import { connect } from 'react-redux';

import { followAC, FriendType, setFriendsAC, unfollowAC } from '../../redux/friends-reducer';
import { AppStateType, ActionsType } from '../../redux/redux-store';

import Friends from './FriendsClass';

let mapStateToProps = (state: AppStateType) => {
  return {
    friends: state.friendsPage.friends
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
    }
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;