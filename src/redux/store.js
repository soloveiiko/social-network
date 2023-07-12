import { createStore, combineReducers } from 'redux'
import profile from './profile/profile'
import dialogs from './dialogs/dialogs'
import users from './users/users'
import posts from './posts/posts'
import auth from './auth/auth'

const reducers = combineReducers({
  profile,
  posts,
  dialogs,
  users,
  auth,
})
export const store = createStore(reducers)
