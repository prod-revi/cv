import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: none;
`

export default Footer
