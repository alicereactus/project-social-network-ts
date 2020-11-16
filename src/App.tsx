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

const App = (props: PropsType) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/paviedamliennia'
          render={() => <Dialogs
            dialogsPage={props.store.state.dialogsPage}
            sendMessage={props.store.sendMessage}
            updateNewMessageText={props.store.updateNewMessageText} />} />
        <Route path='/prafajl'
          render={() => <Profile
            profilePage={props.store.state.profilePage}
            addPost={props.store.addPost}
            updateNewPostText={props.store.updateNewPostText} />} />
        <Route path='/naviny'
          render={() => <News />} />
        <Route path='/muzyka'
          render={() => <Music />} />
        <Route path='/nalady'
          render={() => <Settings />} />
        <Route path='/siabry'
          render={() => <Friends
            friendsPage={props.store.state.friendsPage} />} />
      </div>
    </div>
  );
}

export default App;