import React from 'react';

import { MessageType } from '../../../redux/dialogs-reducer';

import styles from './../Dialogs.module.css';

const Message = (props: MessageType) => {
  return (
      <div className={(props.message === 'Usio vydatna) Jak ty?') ? styles.message : styles.myMessage}>
        {props.message}
        <div className={styles.messageTime}>
        {props.time}
        </div>
      </div>
  )
}

export default Message