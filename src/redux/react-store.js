import {createStore, combineReducers} from 'redux';
import profile from './profile';
import dialogs from './dialogs';
import users from './users';

let reducers = combineReducers({
    profile,
    dialogsPage: dialogs,
    usersPage: users
});

export const store = createStore(reducers);