import React from 'react'
import ReactDOM from 'react-dom'
import { Application } from './application'
import { AuthProvider } from './pages/auth'

ReactDOM.render(
  <AuthProvider>
    <Application />
  </AuthProvider>,
  document.getElementById('root')
)
