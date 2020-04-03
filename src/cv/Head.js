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
  padding: 10px 50px;
  text-align: left;

  background-color: #1fc8db54;
  background-image: linear-gradient(
    141deg,
    #3ee69ca6 0%,
    #1fc8db78 51%,
    #289cff9e 75%
  );
`

export default Head