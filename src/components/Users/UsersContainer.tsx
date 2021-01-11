import React from 'react';
import { connect } from 'react-redux';

import {
  UserType, setCurrentPage, setTotalUsersCount, toggleIsFollowingProgress,
  getUsersThunkCreator, followThunkCreator, unfollowThunkCreator
} from '../../redux/users-reducer';
import { AppStateType } from '../../redux/redux-store';

import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';


type MapStateToPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: Array<number>
}

type MapDispatchToPropsType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsers: number) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
}

type UsersContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersContainerPropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users
        users={this.props.users}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged} />
    </>
  }
}


let mapStateToProps = (state: AppStateType) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

// let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
//   return {
//     follow: (userID: number) => {
//       dispatch(followAC(userID))
//     },
//     unfollow: (userID: number) => {
//       dispatch(unfollowAC(userID))
//     },
//     setUsers: (users: Array<UserType>) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage: number) => {
//       dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalUsersCount: number) => {
//       dispatch(setTotalUsersCountAC(totalUsersCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }


export default connect(mapStateToProps, {
  getUsers: getUsersThunkCreator,
  follow: followThunkCreator,
  unfollow: unfollowThunkCreator,
  setCurrentPage, setTotalUsersCount, toggleIsFollowingProgress
})(UsersContainer)