import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App: React.FC = () => {

  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile/:userId?'
          render={() => <ProfileContainer />} />
        <Route path='/paviedamliennia'
          render={() => <DialogsContainer />} />
        <Route path='/users'
          render={() => <UsersContainer /> } />
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

export default App;