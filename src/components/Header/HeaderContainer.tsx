import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Header from './Header';
import { AppStateType } from '../../redux/redux-store';
import { setAuthUserData } from '../../redux/auth-reducer'

type MapStateToPropsType = {
  isAuth: boolean
  login: string | null
}

type MapDispatchToPropsType = {
  setAuthUserData: (id: number | null, login: string | null, email: string | null) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType

type HeaderContainerPropsType = OwnPropsType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
        headers: {
          'api-key': '9aa516cb-8f4b-45f8-be8d-59445844c51c'
        }
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data
          this.props.setAuthUserData(id, login, email)
        }
      })
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

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);