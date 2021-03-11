import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { initializeThunkCreator } from './redux/app-reducer';

import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

import './App.css';
import { AppStateType } from './redux/redux-store';
import Preloader from './components/Common/Preloader/Preloader';

type MapStateToPropsPropsType = {
  initialized: boolean
}

type MapDispatchToPropsType = {
  initializeApp: () => void
}

class App extends React.Component<MapStateToPropsPropsType & MapDispatchToPropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }
  
  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/login'
            render={() => <Login />} />
          <Route path='/profile/:userId?'
            render={() => <ProfileContainer />} />
          <Route path='/paviedamliennia'
            render={() => <DialogsContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/muzyka'
            render={() => <Music />} />
          <Route path='/naviny'
            render={() => <News />} />
          <Route path='/nalady'
            render={() => <Settings />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsPropsType => {
  return {
    initialized: state.app.initialized
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { initializeApp: initializeThunkCreator }),
  withRouter
  )(App);