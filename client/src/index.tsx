import React from 'react'
import ReactDOM from 'react-dom/client'
import { Application } from './application'
import { AuthProvider } from './pages/auth'

const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement )
root.render(
  <AuthProvider>
    <Application />
  </AuthProvider>
)
