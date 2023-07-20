import {
  GET_USER_DATA,
  GET_USER_DATA_ERROR,
  GET_USER_DATA_SUCCESS,
} from './action'

const initialState = {
  user: [],
  isAuth: true,
  isLoading: false,
  error: '',
}

const auth = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_USER_DATA:
      return {
        ...state,
        isLoading: true,
      }
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuth: true,
        isLoading: false,
        error: '',
      }
    case GET_USER_DATA_ERROR:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default auth
