import {createStore, combineReducers} from 'redux';
import profile from './posts/posts';
import dialogs from './dialogs';
import users from './users';
import posts from "./posts/posts";

const reducers = combineReducers({
    profile,
    posts,
    dialogs,
    users
});

export const store = createStore(reducers);