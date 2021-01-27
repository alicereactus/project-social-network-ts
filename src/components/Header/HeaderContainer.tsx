import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { AppStateType } from '../../redux/redux-store';
import { logoutThunkCreator } from '../../redux/auth-reducer'

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  logout: () => void
}

type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  render() {
    return <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login} />
  }
}

const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, { logout: logoutThunkCreator })(HeaderContainer);