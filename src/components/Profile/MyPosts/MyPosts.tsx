import React, {ChangeEvent} from 'react';
import { PostType, ActionsType, AddPostActionCreator, UpdatePostActionCreator } from '../../../redux/state';
import Post from './Post/Post';
import s from './MyPosts.module.css';

type MyPostsPropsType = {
  posts: Array<PostType>
  newPostText: string
  dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />).reverse()

  // const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
      props.dispatch(AddPostActionCreator())
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.currentTarget.value
      props.dispatch(UpdatePostActionCreator(text))
  }

  return (
    <div className={s.postsWrapper}>

      <div className={s.postsTitle}>
        Maje pasty
        </div>

      <div className={s.addPost}>
        <div>
          <textarea wrap='hard' onChange={onPostChange} value={props.newPostText} />
        </div>
        <div className={s.addPostBtn}>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;