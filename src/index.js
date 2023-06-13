import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import store from './redux/react-store';
import {Provider} from 'react-redux';

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
}
store.callbackFunc((state) => {
  rerenderEntireTree(state);
});
rerenderEntireTree(store.getState());