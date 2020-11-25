import React from 'react';
import { PostType } from '../../../../redux/state';
import s from './Post.module.css';

const Post = (props: PostType) => {
  return (
    <div className={s.postItemWrapper}>
      <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/7/77/Richard_Madden_as_Robb_Stark.jpg/274px-Richard_Madden_as_Robb_Stark.jpg' />
      <div className={s.postItem}>
        {props.message}
      </div>
      {/* <div>
        <span> like </span> 
        <span>{props.likesCount}</span>
      </div> */}
    </div>
  )
}

export default Post;