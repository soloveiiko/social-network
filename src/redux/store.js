import { createStore, combineReducers } from 'redux'
import profile from './profile'
import dialogs from './dialogs'
import users from './users'
import posts from './posts'
import auth from './auth'

const reducers = combineReducers({
  profile,
  posts,
  dialogs,
  users,
  auth,
})
export const store = createStore(reducers)
