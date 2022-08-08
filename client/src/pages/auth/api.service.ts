import axios from 'axios'

const localStorageKey = '__auth_provider_token__'

export const getAuthToken: () => string = () => {
  const auth = window.localStorage.getItem(localStorageKey)
  const value = !!auth ? JSON.parse(auth) : ''
  console.log('token', value)
  return value;
}

export type ResponsePayload = {
  email: string
  password: string
}
axios.defaults.baseURL = 'http://localhost:5000/'

const signUp = (data: ResponsePayload) => {
  return axios.post('/auth/signup', data)
}

// const getUser: () => Promise<Auth> = () => {
//   return axios.get('/users/me').then((req) => req.data)
// }

const signOut = () => window.localStorage.removeItem(localStorageKey)

const signIn = (data: ResponsePayload) => {
  return axios.post('/auth/signin', data).then((response) => {
    console.log(response)
    if (response.data.access_token) {
      console.log('Set Token')
      localStorage.setItem(localStorageKey, JSON.stringify(response.data.access_token))
    }

    console.log('data', response.data.access_token)
    return response.data.access_token
  })
}

export const service = {
  signUp,
  signOut,
  getAuthToken,
  signIn
}
