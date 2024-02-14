import { defineStore } from 'pinia'

interface SignUpData {
  email: string
  username: string
  password: string
  confirmPassword?: string
}

interface LogInData {
  email: string
  password: string
  username?: string
}

interface UserStoreState {
  isAuntificated: boolean
  username: string | null
  password: string | null
  email: string | null
}

export const useUserStore = defineStore('user', {
  state: (): UserStoreState => ({
    isAuntificated: false,
    username: null,
    email: null,
    password: null,
  }),
  getters: {
    getUserInfo(state) {
      return {
        username: state.username,
        password:state.password,
        email: state.email 
      }
    },
    isAuth(state) {
      return state.isAuntificated
    }
  },
  actions: {
    async signUp(data: SignUpData) {
      const response = await useFetch('users/add', {
        methods: 'POST',
        body: data
      })

      if (!response) return
      this.saveUseData(data)
    },
    async logIn(data: LogInData) {
      const response = await useFetch('auth/login', {
        methods: 'POST',
        body: {
          username: data.email,
          password: data.password
        }
      })

      if (!response) return
      this.saveUseData(data)
    },
    saveUseData(data: LogInData) {
      this.email = data.email
      this.password = data.password
      this.username = data.username || null
      this.isAuntificated = true
    },
    logout() {
      this.username = null
      this.password = null
      this.email = null
      this.isAuntificated = false
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
