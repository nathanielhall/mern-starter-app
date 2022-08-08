import { Spinner } from 'core/spinner'
import React, { FC } from 'react'
import { Page } from './core'
import { SignIn, SignUp, RequireAuth, useAuth } from './pages/auth'
import { Routes, Route, Outlet, Link } from 'react-router-dom'

export const Start = () => {
  const { currentUser } = useAuth()

  return (
    <React.Suspense fallback={<Spinner />}>
      {currentUser ? <AuthenticatedApp /> : <SignIn />}
    </React.Suspense>
  )
}

export const Application: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Start />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <AuthenticatedApp />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}

export const Layout = () => {
  return (
    <Page>
      <Outlet />
    </Page>
  )
}

const AuthenticatedApp: FC = () => {
  return (
    <Page>
      <>{`Authenticated App`}</>
      <Link to="/signout">Logout</Link>
    </Page>
  )
}


const SignOut = () => {
  const {onSignOut} = useAuth()

  React.useEffect(() => {
    onSignOut()
  }, [])

  return (
    <Page>
      {`Signed out`}
      <Link to="/">Login</Link>
    </Page>
  )
}