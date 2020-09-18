import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
      <div>
        Iconos diseñados por
        <a href='https://www.flaticon.es/autores/freepik' title='Freepik'>
          Freepik
        </a>
        from
        <a href='https://www.flaticon.es/' title='Flaticon'>
          Icons made by{' '}
          <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
            Freepik
          </a>{' '}
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            {' '}
            www.flaticon.com
          </a>{' '}
          www.flaticon.es
        </a>
        Icons made by{' '}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          {' '}
          www.flaticon.com
        </a>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: none;
`

export default Footer
