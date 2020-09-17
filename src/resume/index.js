import React from 'react'
import Routing from './core/Routing'
import { Provider } from 'react-redux'
import store from './redux/store'

const Resume = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Routing />
      </Provider>
    </React.StrictMode>
  )
}

export default Resume
