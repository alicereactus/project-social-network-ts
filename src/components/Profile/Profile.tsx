import React from 'react';
import { ProfileType } from '../../redux/profile-reducer';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  profile: ProfileType | null
  status: string
  updateUserStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo 
      profile={props.profile} 
      status={props.status}
      updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;