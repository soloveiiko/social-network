export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'
export const ADD_POST_ERROR = 'ADD_POST_ERROR'
export const addPost = () => {
  return {
    type: ADD_POST,
  }
}
export const addPostSuccess = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: post,
  }
}
export const addPostError = (errorMessage) => {
  return {
    type: ADD_POST_ERROR,
    payload: errorMessage,
  }
}

export const addPostAsync = () => {
  return (dispatch, getState) => {
    dispatch(addPost)
    setTimeout(() => {
      const { posts } = getState()
      const newPost = posts.postValue
      dispatch(addPostSuccess(newPost))
      console.log(newPost)
    })
  }
}
