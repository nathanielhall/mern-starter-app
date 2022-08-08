import React from 'react'
import ReactDOM from 'react-dom/client'
import { Application } from './application'
import { AuthProvider } from './pages/auth'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Application />
    </BrowserRouter>
  </AuthProvider>
)
