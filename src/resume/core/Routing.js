import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './Private'

import Header from '../components/Header'
import PublicPage from '../pages/PublicPage'
import LoginPage from '../pages/LoginPage'
import ProtectedPage from '../pages/ProtectedPage'
import Resume from '../Resume'

export default function AuthExample() {
  return (
    <Router>
      <div>
        <React.Suspense fallback='tu mama en tanga'>
          <Header />
        </React.Suspense>

        <Switch>
          <Route exact path='/'>
            <Resume />
          </Route>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/protected'>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}
