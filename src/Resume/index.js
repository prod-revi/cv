import React from 'react'
import Routing from './core/Routing'
import styled, { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'normalize.css'
import './static/initialStyles.css'
import theme from './static/theme.json'

const Resume = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme || {}}>
        <Provider store={store}>
          <Background>
            <Routing />
          </Background>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

const Background = styled.div`
  background: ${({ theme }) => theme.colors.background};
  font-size: 1.2em;
  line-height: 1.5em;
`

export default Resume
