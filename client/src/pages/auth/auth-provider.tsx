import React, { FC, useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from 'react-query'
import { service } from './api.service'

export type Auth = {
  id: number
  firstName: string
  lastName: string
  token: string
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
export const AuthProvider: FC<{children: React.ReactElement}> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<Auth | null>(null)

  React.useEffect(() => {
    const getCurrentUser = () =>
      service.getAuthToken().then((res) => setCurrentUser(res))

    getCurrentUser()
  }, [])

  const onSignUp = useMutation(service.signUp, {
    // onSuccess: () => queryClient.invalidateQueries()
  })

  const onSignIn = useMutation(service.signIn, {
    // onSuccess: () => queryClient.invalidateQueries()
  })

  // const onLogout =

  return {
    currentUser,
    onSignIn,
    onSignUp
  }
}
