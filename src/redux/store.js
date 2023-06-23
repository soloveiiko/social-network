import dialogs from './dialogs'
import profile from './profile'
import firstUser from '../assets/images/1.png';
import secondUser from '../assets/images/2.png';
import thirdUser from '../assets/images/3.jpeg';

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
        console.log('post added')
    },

    getState() {
        return this._state;
    },

    callbackFunc(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {
        this._state.postsPage = profile(this._state.postsPage, action);
        this._state.dialogsPage = dialogs(this._state.dialogsPage, action);
        this._rerenderEntireTree(this._state);
    }
}

export default store;