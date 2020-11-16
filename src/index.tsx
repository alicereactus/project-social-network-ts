import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/state';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
      store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();