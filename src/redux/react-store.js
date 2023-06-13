import {createStore, combineReducers} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let reducers = combineReducers({
  postsPage: profileReducer,
  dialogsPage: dialogsReducer
});

let store = createStore(reducers);

let callbackFunc;

const storeApi = {
  getState: store.getState,
  dispatch: store.dispatch,
  subscribe: store.subscribe,
  callbackFunc: (callback) => {
    callbackFunc = callback;
  }
};

store.subscribe(() => {
  if (callbackFunc) {
    callbackFunc(store.getState());
  }
});

export default storeApi;
