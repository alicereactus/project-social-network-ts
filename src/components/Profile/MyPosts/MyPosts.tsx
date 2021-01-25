import React from 'react';

import { PostType } from '../../../redux/profile-reducer';

import Post from './Post/Post';

import styles from './MyPosts.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type MyPostsPropsType = {
  posts: Array<PostType>
  addPost: (newPostText: string) => void
  like: (postID: string) => void
  unlike: (postID: string) => void
}

type AddPostPropsType = {
  newPostText: string
}

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(p => <Post
    key={p.id}
    id={p.id}
    message={p.message}
    time={p.time}
    liked={p.liked}
    likesCount={p.likesCount}
    like={props.like}
    unlike={props.unlike} />).reverse()

  // const newPostElement = React.createRef<HTMLTextAreaElement>();
  const onAddPost = (values: AddPostPropsType) => {
    props.addPost(values.newPostText)
  }

  // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   const text = e.currentTarget.value
  //   props.updateNewPostText(text)
  // }

  return (
    <div className={styles.postsWrapper}>

      <div className={styles.postsTitle}>
        Maje pasty
        </div>
      <AddNewPostReduxFrom onSubmit={onAddPost} />
      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddNewPostFrom: React.FC<InjectedFormProps<AddPostPropsType>> = (props) => {
  return (
  <form className={styles.addPost} onSubmit={props.handleSubmit}>
    <div>
      <Field
        name='newPostText'
        component='textarea'
        placeholder='Enter your message'
        wrap='hard' />
    </div>
    <div className={styles.addPostBtn}>
      <button>Dadać post</button>
    </div>
  </form>
  )
}

const AddNewPostReduxFrom = reduxForm<AddPostPropsType>({ form: 'profileAddNewPostFrom' })(AddNewPostFrom)

export default MyPosts;