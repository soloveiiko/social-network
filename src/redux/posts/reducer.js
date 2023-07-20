import { ADD_POST_ERROR, ADD_POST_SUCCESS } from './action'

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
  posts: [
    { id: 1, message: 'Hello my friend', likesCount: 30 },
    { id: 2, message: 'Hello', likesCount: 3 },
  ],
  postValue: '',
  isLoading: false,
  error: '',
}

const posts = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case UPDATE_POST_TEXT:
      return {
        ...state,
        postValue: action.newText,
      }
    case ADD_POST: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case ADD_POST_SUCCESS: {
      let newPost = state.postValue
      return {
        ...state,
        posts: [...state.posts, { id: 3, message: newPost, likesCount: 0 }],
        postValue: '',
        isLoading: false,
        error: '',
      }
    }
    case ADD_POST_ERROR: {
      return {
        ...state,
        posts: [],
        postValue: '',
        isLoading: false,
        error: payload,
      }
    }
    default:
      return state
  }
}
export const updatePostText = (text) => ({
  type: UPDATE_POST_TEXT,
  newText: text,
})

export default posts
