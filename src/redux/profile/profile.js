import defaultAvatar from '../../assets/images/1.png'
// const SET_USER = 'SET-USER';

const initialState = {
    avatar: defaultAvatar,
    name: 'Mariia',
    city: 'Lutsk',
    age: 20,
    bio: ''
  }
const profile = (state = initialState, action) => {
  switch (action.type) {
    // case SET_USER:
    //   return {
    //     ...state,
    //   }
    default:
      return state
  }
}
// export const setUser = () => ({
//   type: SET_USER,
// });
export default profile;