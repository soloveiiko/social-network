const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello my friend', likesCount: 30},
        {id: 2, message: 'Hello', likesCount: 3},
    ],
    postValue: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_TEXT:
            return {
                ...state,
                postValue: action.newText
            }
        case ADD_POST: {
            let newPost = state.postValue;
            return {
              ...state,
              posts: [...state.posts, {id:3, message: newPost, likesCount: 0}],
              postValue: ''
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})

export default profileReducer;