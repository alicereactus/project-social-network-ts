import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppStateType } from '../../redux/redux-store';
import { ProfileType, setUserProfile } from '../../redux/profile-reducer'

import Profile from './Profile';
import { profileAPI } from '../../api/api';

type PathParamsType = {
  userId: string
}

type MapStateToPropsType = {
  profile: ProfileType | null
}

type MapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & OwnPropsType


class ProfileContainer extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = Number(this.props.match.params.userId)
    if (!userId && this.props.profile) {
      userId = this.props.profile.userId
    }
    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data)
      })
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    )
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile
  }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);