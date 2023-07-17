import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})
export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data
    })
}
export const getUser = (userId = 3) => {
  return instance.get(`profile/${userId}`).then((response) => {
    return response.data
  })
}
export const getAuth = () => {
  return instance.get('/auth/me').then((response) => {
    return response.data
  })
}