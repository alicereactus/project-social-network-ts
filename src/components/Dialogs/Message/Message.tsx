import React from 'react';
import {MessageType} from '../../../redux/state';
import s from './../Dialogs.module.css';

const Message = (props: MessageType) => {
  return (
    <div className={(props.message === 'Usio vydatna) Jak ty?') ? s.message : s.myMessage}>{props.message}</div>
  )
}

export default Message