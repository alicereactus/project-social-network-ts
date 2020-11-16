import React, {ChangeEvent} from 'react';
import { PostType } from '../../../redux/state';
import Post from './Post/Post';
import s from './MyPosts.module.css';

type MyPostsPropsType = {
  posts: Array<PostType>
  newPostText: string
  addPost: () => void
  updateNewPostText: (newText: string) => void
}

const MyPosts = (props: MyPostsPropsType) => {

  const postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} />)

  // const newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
      props.addPost()
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      const text = e.currentTarget.value
      props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <div>
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