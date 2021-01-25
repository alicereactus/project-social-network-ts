import React from 'react';
import { DialogsPagePropsType } from '../../redux/dialogs-reducer'

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import styles from './Dialogs.module.css';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type DialogsPropsType = {
  dialogsPage: DialogsPagePropsType
  sendMessage: (newMessageBody: string) => void
}

type AddMessagePropsType = {
  newMessageBody: string
}

const Dialogs = (props: DialogsPropsType) => {

  const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} avatar={d.avatar} />)

  const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} id={m.id} message={m.message} time={m.time} />)

  const addNewMessage = (values: AddMessagePropsType) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={styles.dialogsWrapper}>
      <div className={styles.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <AddMessageReduxForm onSubmit={addNewMessage} />
    </div>
  )
}

const AddMessageForm: React.FC<InjectedFormProps<AddMessagePropsType>> = ({ handleSubmit }) => {
  return (
    <form className={styles.sendMessage} onSubmit={handleSubmit}>
      <div className={styles.sendMessageText}>
        <Field
          name='newMessageBody'
          component='textarea'
          placeholder='Enter your message'
          wrap='hard' />
      </div>
      <div className={styles.sendMessageBtn}>
        <button>Adpravić</button>
      </div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm<AddMessagePropsType>({ form: 'dialogsAddMessageForm' })(AddMessageForm)

export default Dialogs