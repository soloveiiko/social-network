import {createStore, combineReducers} from 'redux';
import profile from './profile/profile';
import dialogs from './dialogs/dialogs';
import users from './users/users';
import posts from './posts/posts';

const reducers = combineReducers({
    profile,
    posts,
    dialogs,
    users
});

export const store = createStore(reducers);