import axios from 'axios'
import { Auth } from './auth-provider';
// import { Auth } from './auth-provider'

const localStorageKey = '__auth_provider_token__'


export const getAuthToken: () => Promise<Auth | null> = async () => {
	const auth = await window.localStorage.getItem(localStorageKey);
	return !!auth ? JSON.parse(auth) : null;
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

const signIn = (data: ResponsePayload) => {
  return axios.post('/auth/signin', data).then((response) => {
	   console.log(response)
    if (response.data.access_token) {
      localStorage.setItem(localStorageKey, JSON.stringify(response.data))
    }
    return response.data
  })
}

export const service = {
  signUp,
  getAuthToken,
  signIn
}
