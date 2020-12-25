import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'api-key': '9aa516cb-8f4b-45f8-be8d-59445844c51c'
  }
})

export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize: number = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  }
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance
      .get(`profile/` + userId)
      .then(response => {
        return response.data
      })
  }
}

export const authAPI = {
  getAuth() {
    return instance
      .get(`auth/me`)
      .then(response => {
        return response.data
      })
  }
}

export const followUnfollowAPI = {
  unfollow(id: number) {
    return instance
      .delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },
  follow(id: number) {
    return instance
      .post(`follow/${id}`, {})
      .then(response => {
        return response.data
      })
  },
}