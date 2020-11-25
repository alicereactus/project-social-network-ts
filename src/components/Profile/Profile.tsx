import React from 'react';
import {ProfilePagePropsType, ActionsType} from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css'

type ProfilePropsType = {
    profilePage: ProfilePagePropsType
    dispatch: (action: ActionsType) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div className={s.profileWrapper}>
      <ProfileInfo 
      profile={props.profilePage.profile} />
      <MyPosts 
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
    </div>
  )
}

export default Profile;