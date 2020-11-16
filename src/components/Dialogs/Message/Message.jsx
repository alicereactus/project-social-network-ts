import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
  return (
    <div className={(props.id === 4) ? s.myMessage : s.message}>{props.message}</div>
  )
}

export default Message