import firstUser from "../assets/images/1.png";
import secondUser from "../assets/images/2.png";
import thirdUser from "../assets/images/3.jpeg";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {id: 1, name: 'Alex', image: firstUser},
        {id: 2, name: 'Pasha', image: secondUser},
        {id: 3, name: 'Kate', image: thirdUser},
    ],
    messagesFirstUser: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m good'},
    ],
    messagesSecondUser: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I`m good'},
    ],
    messageValue: ''
}

const dialogs = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                messageValue: action.newText
            }
        case ADD_MESSAGE:
            let newMessage = state.messageValue
            return {
                ...state,
                messagesFirstUser: [...state.messagesFirstUser, {id: 4, message: newMessage}],
                messageValue: ''
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text})

export default dialogs;