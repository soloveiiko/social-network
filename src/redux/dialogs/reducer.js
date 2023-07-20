import firstUser from '../../assets/images/1.png'
import secondUser from '../../assets/images/2.png'
import thirdUser from '../../assets/images/3.jpeg'
import { ADD_MESSAGE_ERROR, ADD_MESSAGE_SUCCESS } from './action'

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_VALUE = 'UPDATE-MESSAGE-TEXT'

let initialState = {
  dialogs: [
    { id: 1, name: 'Alex', image: firstUser },
    { id: 2, name: 'Pasha', image: secondUser },
    { id: 3, name: 'Kate', image: thirdUser },
  ],
  messagesFirstUser: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I`m good' },
  ],
  messagesSecondUser: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'I`m good' },
  ],
  messageValue: '',
  isLoading: false,
  error: '',
}

const dialogs = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_MESSAGE_VALUE:
      return {
        ...state,
        messageValue: action.newText,
      }
    case ADD_MESSAGE:
      return {
        ...state,
        isLoading: true,
      }
    case ADD_MESSAGE_SUCCESS:
      let newMessage = state.messageValue
      return {
        ...state,
        messagesFirstUser: [
          ...state.messagesFirstUser,
          { id: 4, message: newMessage },
        ],
        messageValue: '',
        isLoading: false,
        error: '',
      }
    case ADD_MESSAGE_ERROR:
      return {
        ...state,
        messageValue: '',
        isLoading: false,
        error: payload,
      }
    default:
      return state
  }
}
export const updateMessageActionCreator = (text) => ({
  type: UPDATE_MESSAGE_VALUE,
  newText: text,
})

export default dialogs
