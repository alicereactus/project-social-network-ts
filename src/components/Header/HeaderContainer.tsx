import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import { AppStateType } from '../../redux/redux-store';
import { getAuthUserDataThunkCreator } from '../../redux/auth-reducer'

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  getAuthUserData: () => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type HeaderContainerPropsType = OwnPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

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

export default connect(mapStateToProps, { getAuthUserData: getAuthUserDataThunkCreator })(HeaderContainer);