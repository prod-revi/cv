import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Loader from '../components/Loader'

const PrivateRoute = React.lazy(() => import('./Private'))

const Header = React.lazy(() => import('../components/Header'))
const PublicPage = React.lazy(() => import('../pages/Public'))
const LoginPage = React.lazy(() => import('../pages/Login'))
const ProtectedPage = React.lazy(() => import('../pages/Protected'))
const Resume = React.lazy(() => import('../pages/Resume'))

export default function AuthExample() {
  return (
    <Router>
      <React.Suspense fallback={<Loader />}>
        <Header />
      </React.Suspense>

      <Switch>
        <Route exact path='/'>
          <React.Suspense fallback={<Loader />}>
            <Resume />
          </React.Suspense>
        </Route>
        <Route path='/public'>
          <React.Suspense fallback={<Loader />}>
            <PublicPage />
          </React.Suspense>
        </Route>
        <Route path='/login'>
          <React.Suspense fallback={<Loader />}>
            <LoginPage />
          </React.Suspense>
        </Route>
        <PrivateRoute path='/protected'>
          <React.Suspense fallback={<Loader />}>
            <ProtectedPage />
          </React.Suspense>
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
