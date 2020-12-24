import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { AppStateType } from '../../redux/redux-store';
import { ProfileType, setUserProfile } from '../../redux/profile-reducer'

import Profile from './Profile';

export type ProfileContainerPropsType = OwnPropsType & MapStateToPropsType & MapDispatchToPropsType

type OwnPropsType = {}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`, {
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);