const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false
}

const auth = (state = initialState, action) => {
  switch (action.type){
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}});

export default auth;