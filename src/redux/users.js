const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

let initialState = {

  users: [],
  totalUsersCount: 1,
  pageSize: 5,
  isFetching: false

}

const users = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state, ...action.users]
      }
    case SET_CURRENT_PAGE:
        return {
            ...state,
            currentPage: action.currentPage
        }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    default:
      return state;
  }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching: isFetching})
export const setCurrentPage = (currrentPage) => ({type: SET_CURRENT_PAGE, currrentPage})

export default users;