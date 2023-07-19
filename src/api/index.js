import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '',
  },
})
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.get(`profile/status/`, { status: status })
  },
}
export const authAPI = {
  me() {
    return instance.get('/auth/me')
  },
  loginUser() {
    return instance.post('/login')
  },
  deleteUser() {
    return instance.delete('/login')
  },
}
export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  getFollow(userId) {
    instance.post(`/follow/${userId}`)
  },
  getUnfollow(userId) {
    instance.delete(`/follow/${userId}`)
  },
}
