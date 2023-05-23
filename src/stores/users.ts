import axiosClient from '@/axiosClient'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    authInfo: {
      staffId: '' as string,
      accessToken: '' as string,
      refreshToken: '' as string,
      expiresIn: 0 as number
    }
  }),

  getters: {
    getAuthInfo: (state) => state.authInfo
  },

  actions: {
    async login(username: string, password: string) {
      const url = import.meta.env.VITE_API_LOGIN
      const data = await axiosClient.post(url, {
        username: username,
        password: password,
        grantType: 'password'
      })

      if (data) {
        console.log('data :>> ', data)
        this.authInfo.staffId = data.data.data.staffId
        this.authInfo.accessToken = data.data.data.accessToken
        this.authInfo.refreshToken = data.data.data.refreshToken
        this.authInfo.expiresIn = data.data.data.expiration
      }
    }
  }
})
