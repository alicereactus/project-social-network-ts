import React, {ChangeEvent} from 'react';
import { DialogsPagePropsType } from '../../redux/state'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';

type DialogsPropsType = {
  dialogsPage: DialogsPagePropsType
  sendMessage: () => void
  updateNewMessageText: (newText: string) => void
}

const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar} />)

  const messagesElements = props.dialogsPage.messages.map(m => <Message id={m.id} message={m.message} />)

  // const newSendMessageElement = React.createRef<HTMLTextAreaElement>();

  const sendMessage = () => {
        props.sendMessage()
  }

  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.currentTarget.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={s.dialogsWrapper}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <div className={s.sendMessage}>
        <div className={s.sendMessageText}>
          <textarea wrap='hard' onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
        </div>
        <div className={s.sendMessageBtn}>
          <button onClick={sendMessage}>Adpravić</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs