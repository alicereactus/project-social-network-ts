import { connect } from 'react-redux';

import { AppStateType, ActionsType } from '../../redux/redux-store';
import { SendMessageActionCreator, UpdateMessageActionCreator } from '../../redux/dialogs-reducer'

import Dialogs from './Dialogs';
// const newSendMessageElement = React.createRef<HTMLTextAreaElement>();

let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    sendMessage: () => {
      dispatch(SendMessageActionCreator())
    },
    updateMessage: (text: string) => {
      dispatch(UpdateMessageActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer