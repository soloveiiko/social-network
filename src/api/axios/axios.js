import axios from 'axios';

export const axiosBase = axios.create({
  baseUrl: 'https://social-network.samuraijs.com'
})
export const getUsersPage = async (currentPage = 1, pageSize = 1) => {
  const response = await axiosBase.get(`/api/1.0/users?page=${currentPage}&count=${pageSize}`);
  return response.data.items;
}