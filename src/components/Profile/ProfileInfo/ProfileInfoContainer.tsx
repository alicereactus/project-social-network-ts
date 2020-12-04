import { connect } from 'react-redux';

import { AppStateType } from '../../../redux/redux-store';

import ProfileInfo from './ProfileInfo';


let mapStateToProps = (state: AppStateType) => {
  return {
    profile: state.profilePage.profile
  }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo)

export default ProfileInfoContainer;