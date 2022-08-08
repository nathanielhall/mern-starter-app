import React, { FC, useState } from 'react'
import { QueryClient, QueryClientProvider, useMutation } from 'react-query'
import { service } from './api.service'
// import { useLocation, Navigate } from 'react-router-dom'

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
export const AuthProvider: FC<{ children: React.ReactElement }> = ({
  children
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

const mockUser: (token: string) => Auth = (token) => ({
  id: 1,
  firstName: 'Nathan',
  lastName: 'Hall',
  token: JSON.stringify(token)
})
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<Auth | null>(null)


  
  React.useEffect(() => {
    console.log('currentUserXXX', currentUser)

  }, [currentUser])

  React.useEffect(() => {
    const token = service.getAuthToken()

    if (token) {
      // FIXME: Read token payload here if token exists
      const user = mockUser(token)
      console.log('useEffect, SET CURRENT USER', user)
      setCurrentUser(user)
    }
  }, [])

  const onSignOut = () => {
    service.signOut()
    setCurrentUser(null)
  }

  const onSignUp = useMutation(service.signUp, {
    // onSuccess: () => queryClient.invalidateQueries()
    onSuccess: () => {
      const token = service.getAuthToken()

      // FIXME: Read token payload here if token exists
      const user = mockUser(token)
      console.log('onSignUp, SET CURRENT USER', user)
      setCurrentUser(user)
    }
  })

  const onSignIn = useMutation(service.signIn, {
    onSuccess: () => {
      const token = service.getAuthToken()

      if (token) {
        const user = mockUser(token)
        console.log('onSignIn, SET CURRENT USER', user)
        setCurrentUser(user)
      }
    }
  })

  // const onLogout =

  return {
    currentUser,
    onSignIn,
    onSignUp,
    onSignOut
  }
}

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { currentUser } = useAuth()
  // const location = useLocation()
  console.log('currentUser', currentUser)

  if (!currentUser) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    // return <Navigate to="/signin" state={{ from: location }} replace />
    return null
  }

  return children
}
