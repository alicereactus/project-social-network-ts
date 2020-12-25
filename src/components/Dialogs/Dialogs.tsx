import React, { ChangeEvent } from 'react';
import { DialogsPagePropsType } from '../../redux/dialogs-reducer'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import styles from './Dialogs.module.css';

type DialogsPropsType = {
  dialogsPage: DialogsPagePropsType
  sendMessage: () => void
  updateMessage: (text: string) => void 
}

const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />)

  const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} time={m.time} />)

  // const newSendMessageElement = React.createRef<HTMLTextAreaElement>();

  const sendMessage = () => {
    props.sendMessage()
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    props.updateMessage(text)
  }

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div className={styles.sendMessage}>
        <div className={styles.sendMessageText}>
          <textarea wrap='hard' onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
        </div>
        <div className={styles.sendMessageBtn}>
          <button onClick={sendMessage}>Adpravić</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs