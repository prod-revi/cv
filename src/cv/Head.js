import React from 'react'
import styled from 'styled-components'

function Head (props) {
  const {name, carrier} = props.head
  return (
    <HeadContainer>
      <h1>{name}</h1>
      <h2>{carrier}</h2>
    </HeadContainer>
  )
}


const HeadContainer = styled.div`
  background-color: lightgrey;
  padding: 10px;
`

export default Head