export const ADD_MESSAGE = 'ADD-MESSAGE'
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS-MESSAGE'
export const ADD_MESSAGE_ERROR = 'ADD-ADD_MESSAGE_ERROR'
export const UPDATE_MESSAGE_VALUE = 'UPDATE-MESSAGE-TEXT'

export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  }
}
export const addMessageSuccess = (newMessage) => {
  return {
    type: ADD_MESSAGE_SUCCESS,
    payload: newMessage,
  }
}
export const addMessageError = (errorMessage) => {
  return {
    type: ADD_MESSAGE_ERROR,
    payload: errorMessage,
  }
}
export const addMessageAsync = () => {
  return (dispatch, getState) => {
    dispatch(addMessage())
    setTimeout(() => {
      const { dialogs } = getState()
      const newMessage = dialogs.messageValue
      dispatch(addMessageSuccess(newMessage))
      console.log(newMessage)
    }, 1000)
  }
}
