import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import profile from './profile/reducer'
import dialogs from './dialogs/reducer'
import users from './users'
import posts from './posts/reducer'
import auth from './auth/reducer'

const rootReducer = combineReducers({
  profile,
  posts,
  dialogs,
  users,
  auth,
})
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
