import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { AppStateType } from '../../redux/redux-store';
import { ProfileType, setUserProfile } from '../../redux/profile-reducer'

import Profile from './Profile';

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
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId, {
        withCredentials: true,
        headers: {
          'api-key': '9aa516cb-8f4b-45f8-be8d-59445844c51c'
        }
      })
      .then(response => {
        this.props.setUserProfile(response.data)
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