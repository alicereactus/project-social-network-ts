import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/redux-store';
import { ProfileType, getUserProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profile-reducer'

import Profile from './Profile';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

type PathParamsType = {
  userId: string
}

type MapStateToPropsType = {
  profile: ProfileType | null
  status: string
}

type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateUserStatus: (status: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = Number(this.props.match.params.userId)
    if (!userId) {
      userId = 13052
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} 
        profile={this.props.profile} 
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus} />
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  }
}

// const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default compose<React.ComponentType>(
  // withAuthRedirect,
  withRouter,
  connect(mapStateToProps, { getUserProfile: getUserProfileThunkCreator, getUserStatus: getStatusThunkCreator, updateUserStatus: updateStatusThunkCreator })
)(ProfileContainer);