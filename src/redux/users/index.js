const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_IS_FETCHING = 'SET-IS-FETCHING'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_FOLLOW_STATUS = 'SET-FOLLOW-STATUS'

let initialState = {
  users: [],
  totalUsersCount: 1,
  pageSize: 5,
  isFetching: false,
  follow: false,
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }),
        follow: true,
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }),
        follow: false,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case SET_FOLLOW_STATUS:
      return {
        ...state,
        follow: action.follow,
      }
    default:
      return state
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching: isFetching,
})
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
})

export default users
