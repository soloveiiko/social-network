const SET_USER = 'SET_USER';

const initialState = {
  profile: null,
  userId : 1
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};

export const setUser = (profile) => ({
  type: SET_USER,
  profile
});

export default profileReducer;
