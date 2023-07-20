import { authAPI } from '../../api'

export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_ERROR = 'GET_USER_DATA_ERROR'
export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  }
}
export const getUserDataSuccess = (user) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: user,
  }
}
export const getUserDataError = (errorMessage) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: errorMessage,
  }
}
export const getUserDataAsync = () => {
  return (dispatch) => {
    dispatch(getUserData())
    authAPI
      .me()
      .then((response) => {
        const user = response.data
        dispatch(getUserDataSuccess(user))
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message
        dispatch(getUserDataError(errorMessage))
      })
  }
}
