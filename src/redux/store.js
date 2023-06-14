import dialogsReducer from './dialogsReducer'
import profileReducer from './profileReducer'
import firstUser from './../images/1.png';
import secondUser from './../images/2.png';
import thirdUser from './../images/3.jpeg';

let store = {
    _state: {
        postsPage: {
            posts: [
                {id: 1, message: 'Hello my friend', likesCount: 30},
                {id: 2, message: 'Hello', likesCount: 3},
            ],
            postValue: '',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Alex', image: firstUser},
                {id: 2, name: 'Pasha', image: secondUser},
                {id: 3, name: 'Kate', image: thirdUser},
            ],
            messageValue: '',
            messagesFirstUser: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I`m good'},
            ],
            messagesSecondUser: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I`m good'},
            ]
        }
    },

    _rerenderEntireTree() {
        console.log('Post added')
    },

    getState() {
        return this._state;
    },

    callbackFunc(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;