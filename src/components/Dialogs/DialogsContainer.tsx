import { connect } from 'react-redux';
import { compose } from 'redux';

import { AppStateType, ActionsType } from '../../redux/redux-store';
import { SendMessageActionCreator } from '../../redux/dialogs-reducer'

import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';


let mapStateToProps = (state: AppStateType) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
  return {
    sendMessage: (newMessageBody: string) => {
      dispatch(SendMessageActionCreator(newMessageBody))
    }
  }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)