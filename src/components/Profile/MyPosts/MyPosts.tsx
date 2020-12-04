import React, {ChangeEvent} from 'react';

import { likeAC, PostType } from '../../../redux/profile-reducer';

import Post from './Post/Post';

import styles from './MyPosts.module.css';

type MyPostsPropsType = {
  posts: Array<PostType>
  newPostText: string
  addPost: () => void
  updateNewPostText: (text: string) => void
  like: (postID: string) => void
  unlike: (postID: string) => void
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
  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.currentTarget.value
      props.updateNewPostText(text)
  }

  return (
    <div className={styles.postsWrapper}>

      <div className={styles.postsTitle}>
        Maje pasty
        </div>

      <div className={styles.addPost}>
        <div>
          <textarea wrap='hard' onChange={onPostChange} value={props.newPostText} />
        </div>
        <div className={styles.addPostBtn}>
          <button onClick={onAddPost}>Dadać post</button>
        </div>
      </div>

      <div className={styles.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;