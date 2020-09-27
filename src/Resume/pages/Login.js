import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setAuthentication } from '../redux/actions/session.actions'
import fakeAuth from '../core/utils/Authorization'

export default function LoginPage() {
  let history = useHistory()
  let location = useLocation()
  const dispatch = useDispatch()

  let { from } = location.state || { from: { pathname: '/' } }

  let login = () => {
    dispatch(setAuthentication(true))
    fakeAuth.authenticate(() => {
      history.replace(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}
