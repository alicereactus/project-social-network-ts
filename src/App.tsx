import React from 'react';
import { Route } from 'react-router-dom';
import { StorePropsType } from './redux/state';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';

type PropsType = {
  store: StorePropsType
}

const App: React.FC<PropsType> = (props) => {

  const state = props.store.getState()

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/paviedamliennia'
          render={() => <Dialogs
            dialogsPage={state.dialogsPage}
            dispatch={props.store.dispatch.bind(props.store)} />} />
        <Route path='/prafajl'
          render={() => <Profile
            profilePage={state.profilePage}
            dispatch={props.store.dispatch.bind(props.store)} />} />
        <Route path='/naviny'
          render={() => <News />} />
        <Route path='/muzyka'
          render={() => <Music />} />
        <Route path='/nalady'
          render={() => <Settings />} />
        <Route path='/siabry'
          render={() => <Friends
            friendsPage={state.friendsPage} />} />
      </div>
    </div>
  );
}

export default App;