import { profileAPI } from '../../api'

export const GET_PROFILE = 'GET_PROFILE'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR'

export const getProfileData = () => {
  return {
    type: GET_PROFILE,
  }
}
export const getProfileSuccess = (profile) => {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: profile,
  }
}
export const getProfileError = (errorMessage) => {
  return {
    type: GET_PROFILE_ERROR,
    payload: errorMessage,
  }
}
export const getProfileAsync = (userId) => {
  return (dispatch) => {
    dispatch(getProfileData())
    profileAPI
      .getProfile(userId)
      .then((response) => {
        const profile = response.data
        dispatch(getProfileSuccess(profile))
        console.log(profile)
      })
      .catch((error) => {
        const errorMessage = error.message
        dispatch(getProfileError(errorMessage))
      })
  }
}
