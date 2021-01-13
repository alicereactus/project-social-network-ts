import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/redux-store';
import { ProfileType, getUserProfileThunkCreator } from '../../redux/profile-reducer'

import Profile from './Profile';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

type PathParamsType = {
  userId: string
}

type MapStateToPropsType = {
  profile: ProfileType | null
}

type MapDispatchToPropsType = {
  getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = Number(this.props.match.params.userId)
    if (!userId && this.props.profile) {
      userId = this.props.profile.userId
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer)

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps, { getUserProfile: getUserProfileThunkCreator })(WithUrlDataContainerComponent);