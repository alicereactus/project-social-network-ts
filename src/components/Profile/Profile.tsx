import React from 'react';
import {ProfilePagePropsType} from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'

type ProfilePropsType = {
    profilePage: ProfilePagePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts 
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText} />
    </div>
  )
}

export default Profile;