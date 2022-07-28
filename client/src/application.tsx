import { Spinner } from 'core/spinner'
import React, { FC } from 'react'
import { Page } from './core'
import { SignIn, useAuth } from './pages/auth'

export const Application: FC = () => {
  const { currentUser } = useAuth()

  return (
    <React.Suspense fallback={<Spinner />}>
      {currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </React.Suspense>
  )
}

const AuthenticatedApp: FC = () => {
  return <Page>{`Authenticated App`}</Page>
}
const UnauthenticatedApp: FC = () => {
  return <SignIn />
}
