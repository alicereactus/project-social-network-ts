import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';

const App: React.FC = () => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/prafajl'
          render={() => <Profile />} />
        <Route path='/paviedamliennia'
          render={() => <DialogsContainer />} />
        <Route path='/siabry'
          render={() => <FriendsContainer />} />
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