import { connect } from 'react-redux';

import { AppStateType, ActionsType  } from '../../../redux/redux-store';
import { AddPostActionCreator, likeAC, unlikeAC, UpdatePostActionCreator } from '../../../redux/profile-reducer';

import MyPosts from './MyPosts';

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    addPost: () => {
      dispatch(AddPostActionCreator())
    },
    updateNewPostText: (text: string) => {
      dispatch(UpdatePostActionCreator(text))
    },
    like: (postID: string) => {
      dispatch(likeAC(postID))
    },
    unlike: (postID: string) => {
      dispatch(unlikeAC(postID))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;