import { GET_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_SUCCESS } from './action'

const initialState = {
  user: [],
  isLoading: false,
  error: '',
}

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        isLoading: true,
      }
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload,
        isLoading: false,
        error: '',
      }
    case GET_PROFILE_ERROR:
      return {
        ...state,
        user: [],
        isLoading: false,
        error: payload,
      }
    default:
      return state
  }
}

export default profileReducer
