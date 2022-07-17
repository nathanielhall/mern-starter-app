import React, {
  FC,
  createContext,
  useEffect,
  useState,
  useContext
} from 'react'
import axios from 'axios'

export type Auth = {
  id: number
  firstName: string
  lastName: string
  token: string
}

const AuthContext = createContext<Auth | undefined>(undefined)

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState<Auth | undefined>(undefined)

  useEffect(() => {
    const fetchAuth = async () => {
      const response = await axios.get<Auth>('/users/me', {
        baseURL: 'http://localhost:5000'
      })
      setAuth(response.data)
    }
    fetchAuth()
  }, [])

  if (!auth) return null

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth: () => Auth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
